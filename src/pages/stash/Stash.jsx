import { useState, useEffect } from 'react';
import './stash.scss';
import { collection, getDocs, query, where, addDoc} from 'firebase/firestore'
import { projectStorage } from '../../firebase/config';
import toast from 'react-hot-toast';
import { auth } from '../../firebase/config';


export default function Stash() {
    
    const userEmail = auth.currentUser.email;

    console.log(userEmail)

    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("Default Name");

    const [itemDescription, setItemDescription] = useState("Default Description");

    const [itemReserve, setItemReserve] = useState("Default Reserve")

    const itemCollectionRef = collection(projectStorage, "items")

  
    const q = query(itemCollectionRef, where("user_email", "==", {userEmail}));

    useEffect(() => {
      console.log("STASH useFF line28Stash WTF!!")
      
      const getItems = async () => {
        const itemsData = await getDocs(q);
        
        setItems(itemsData.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
      
      getItems();
      console.log(items);
      }, [])


    const addItem = async () => {
      console.log(itemName, itemDescription, itemReserve)

      await addDoc(itemCollectionRef, {
        user_email: {userEmail},
        name: itemName,
        description: itemDescription,
        offer: {
          value: itemReserve,
          note: "ITEM RESERVE SET BY YOU!"
        }
      })
      toast.success("Item Added");
    }

    const handleNameChange = (e)=>{
        setItemName(e.target.value);
    }
    const handleDescriptionChange = (e)=>{
        setItemDescription(e.target.value)
    }
    const handleReserveChange = (e)=>{
        setItemReserve(e.target.value)
    }

    return (

        <div className="stashContainer">
          
    
                <div className = "itemForm">
                    <input id = "itemName" type="text" placeholder="Item Name (e.g. Griffon's Eye)" onChange={handleNameChange}/>
                    <textarea placeholder="Add a short description, with stats first (e.g. 20/15 unsocketed)" id="itemDescription" cols="35" rows="5" onChange={handleDescriptionChange}></textarea>
                    <input id ="reserve" type= "number" placeholder ="Enter a reserve amount" onChange={handleReserveChange}/>
                    <button onClick = {addItem}>Add Item</button>
                </div>
         <div className="myItems">

         {items.map((item) => {
       return (
         <div className= "itemCard"key = {item.id}>
           <h2>{item.name}</h2>
           <h3>{item.description}</h3>
           <h1>{item.offer.value}</h1>
           <div>{item.offer.note}</div>
           <button>Delete item</button>
         </div>
       )
     })}
         </div>

        </div>
    )
}
