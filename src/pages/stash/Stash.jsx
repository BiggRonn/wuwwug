import { useState, useEffect, useMemo} from 'react';
import './stash.scss';
import { collection, getDocs, query, where, addDoc, deleteDoc } from 'firebase/firestore'
import { projectStorage } from '../../firebase/config';
import toast from 'react-hot-toast';
import { auth } from '../../firebase/config';
import ItemCard from '../../components/items/ItemCard';


export default function Stash() {
  //checks to see if auth.currentUser exists before setting userEmail variable.
  const userEmail = auth.currentUser?.email;

  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("Default Name");
  const [itemDescription, setItemDescription] = useState("Default Description");
  const [itemReserve, setItemReserve] = useState("Default Reserve")

  // const itemCollectionRef = collection(projectStorage, "items")
const itemCollectionRef = useMemo(() => collection(projectStorage, "items"), [])

const getItems = async () => {
  const q = query(itemCollectionRef, where("user_email", "==", { userEmail }));
  const itemsData = await getDocs(q);

  setItems(itemsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
}
  
  useEffect(() => {
  
    if(userEmail){getItems()}
   
  }, [userEmail, itemCollectionRef, getItems])


  const addItem = async () => {
    console.log(itemName, itemDescription, itemReserve)
    await addDoc(itemCollectionRef, {
      user_email: { userEmail },
      name: itemName,
      description: itemDescription,
      offer: {
        value: itemReserve,
        note: "ITEM RESERVE SET BY YOU!"
      }
    })
    toast.success("Item Added");
    getItems();
  }
  const deleteItem = async (id) => {
    deleteDoc(itemCollectionRef, )
  }
  const handleNameChange = (e) => {
    setItemName(e.target.value);
  }
  const handleDescriptionChange = (e) => {
    setItemDescription(e.target.value)
  }
  const handleReserveChange = (e) => {
    setItemReserve(e.target.value)
  }
  return (
    <div className="stashContainer">
      <div className="itemForm">
        <input id="itemName" type="text" placeholder="Item Name (e.g. Griffon's Eye)" onChange={handleNameChange} />
        <textarea placeholder="Add a short description, with stats first (e.g. 20/15 unsocketed)" id="itemDescription" cols="35" rows="5" onChange={handleDescriptionChange}></textarea>
        <input id="reserve" type="number" placeholder="Enter a reserve amount" onChange={handleReserveChange} />
        <button onClick={addItem}>Add Item</button>
      </div>
      <div className="myItems">
        {items.map((item) => {
          return (
            <ItemCard item={item} deleteItem={deleteItem}/>
          )
        })}
      </div>
    </div>
  )
}
