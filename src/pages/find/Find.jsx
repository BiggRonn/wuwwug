import React from 'react'
import './find.scss';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { projectStorage } from '../../firebase/config';
import { useState } from 'react';

import ItemOfferCard from '../../components/itemOfferCard/ItemOfferCard';



export default function Find() {
    const [items, setItems] = useState([]);
    const [itemSearch, setItemSearch] = useState("Stone of Jordan");
    const itemCollectionRef = collection(projectStorage, "items");

    const handleSearchChange = (e) => {
        setItemSearch(e.target.value)
    }
    const getItems = async () => {
        const q = query(itemCollectionRef, where("name", "==", itemSearch));
        const itemsData = await getDocs(q);
        setItems(itemsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    
    const searchItem = (e) => { 
        getItems();
    }

    getItems();




    return (
        <div className="wrapper">
            <div className="searchBar">
                <input type="text" className="itemSearch" placeholder="Item Name" onChange={handleSearchChange} />
                <button onClick={searchItem}>Search</button>
            </div>
            <div className="items">
                {items.map((item, index) => {
                    return (
                        <ItemOfferCard item={item} key={item.id} setItems={setItems} index= {index}/>
                    )
                })}
            </div>
        </div>
    )
}


