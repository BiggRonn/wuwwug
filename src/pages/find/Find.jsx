import React from 'react'
import './find.scss';
import { collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore'
import { projectStorage } from '../../firebase/config';
import { useState } from 'react';
import { toast } from 'react-hot-toast';



export default function Find() {
    const [items, setItems] = useState([]);
    const [offerValue, setOfferValue] = useState(0);
    const [offerNote, setOfferNote] = useState("Default Note");
    const [itemSearch, setItemSearch] = useState("Stone of Jordan");


    const itemCollectionRef = collection(projectStorage, "items");


    const handleValueChange = (e) => {
        setOfferValue(e.target.value);
    }
    const handleNoteChange = (e) => {
        setOfferNote(e.target.value)
    }
    const handleSearchChange = (e) => {
        setItemSearch(e.target.value)
    }

    const searchItem = (e) => {

        console.log(itemSearch);
        const q = query(itemCollectionRef, where("name", "==", itemSearch));
        const getItems = async () => {
            const itemsData = await getDocs(q);

            setItems(itemsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getItems();
    }

    const submitOffer = async (id, value) => {
        
        const goodOffer = (parseInt(offerValue) > parseInt(value));
       
        if(goodOffer){

            const itemDoc = doc(projectStorage, "items", id)
            
            const newFields = {
                offer: {
                    value: offerValue,
                    note: offerNote,
    
                }
            }
            await updateDoc(itemDoc , newFields).then(toast.success("You made a good offer! t4t!"))
            
        }else{
            toast.error("NTY, offer too LOW");
        }

    }




    return (
        <div className="wrapper">

            <div className="searchBar">
                <input type="text" className="itemSearch" placeholder="Find item by name" onChange={handleSearchChange} />
                <button onClick={searchItem}>Search</button>
            </div>
            <div className="items">
                {items.map((item) => {
                    return (
                        <div className="itemCard" key={item.id}>
                            <h2>{item.name}</h2>
                            <h3>{item.description}</h3>
                            <input type="number" placeholder="Enter offer amount" onChange={handleValueChange} />
                            <input type="text" placeholder="Short message/Contact Info" onChange={handleNoteChange} />
                            <button onClick={() => { submitOffer(item.id, item.offer.value) }}>Submit Offer</button>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}


