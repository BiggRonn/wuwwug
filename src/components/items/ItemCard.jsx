import React from 'react'
import './itemCard.scss';

export default function ItemCard(item) {
    return (
        <div className= "itemCard"key = {item.id}>
           <h2>{item.name}</h2>
           <h3>{item.description}</h3>
           <h1>Offer: {item.offer.value}</h1>
           <div>{item.offer.note}</div>
         </div>
    )
}
