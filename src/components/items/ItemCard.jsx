import React from 'react'
import './itemCard.scss';
import { doc, deleteDoc } from 'firebase/firestore'
import { projectStorage } from '../../firebase/config';


export default function ItemCard({ item }) {
    
    const deleteUser = async (id) =>{
        const itemDoc = doc(projectStorage, "items", id)
        await deleteDoc(itemDoc)
       

    }

    return (
        <div className= "itemCard" key = {item.id}>
           <h2>{item.name}</h2>
           <h3>{item.description}</h3>
           <h1>CBO: {item.offer.value}</h1>
           <div>{item.offer.note}</div>
           <button onClick ={() => {deleteUser(item.id)}}>ACCEPT AND DELETE</button>
         </div>
    )
}
