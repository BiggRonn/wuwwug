import React from 'react'
import './find.scss';
import { collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore'
import { projectStorage } from '../../firebase/config';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import ItemOfferCard from '../../components/itemOfferCard/ItemOfferCard';



export default function Find() {
    const [items, setItems] = useState([]);
   
    const [itemSearch, setItemSearch] = useState("Stone of Jordan");


    const itemCollectionRef = collection(projectStorage, "items");


    
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

    




    return (
        <div className="wrapper">

            <div className="searchBar">
                <input type="text" className="itemSearch" placeholder="Find item by name" onChange={handleSearchChange} />
                <button onClick={searchItem}>Search</button>
            </div>
            <div className="items">
                {items.map((item, index) => {
                    return (
                        <ItemOfferCard item={item} key={item.id} setItems = {setItems} index= {index}/>
                    )
                })}

            </div>
        </div>
    )
}


