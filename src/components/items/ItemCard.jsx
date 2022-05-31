import React from 'react'
import './itemCard.scss';
import { collection, getDocs, query, where, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { projectStorage } from '../../firebase/config';
import { Navigate } from 'react-router-dom';

export default function ItemCard({ item }) {
    
    const deleteUser = async (id) =>{
        const itemDoc = doc(projectStorage, "items", id)
        await deleteDoc(itemDoc)
       // window.location.reload(false)

    }

    return (
        <div className= "itemCard" key = {item.id}>
           <h2>{item.name}</h2>
           <h3>{item.description}</h3>
           <h1>Offer: {item.offer.value}</h1>
           <div>{item.offer.note}</div>
           <button onClick ={() => {deleteUser(item.id)}}>ACCEPT AND DELETE</button>
         </div>
    )
}
