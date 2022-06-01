import './itemOfferCard.scss';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { doc, updateDoc } from 'firebase/firestore'
import { projectStorage } from '../../firebase/config';

export default function ItemOfferCard({item, setItems, index}) {
    const [offerValue, setOfferValue] = useState(0);
    const [offerNote, setOfferNote] = useState("Default Note");
    const handleValueChange = (e) => {
        setOfferValue(e.target.value);
    }
    const handleNoteChange = (e) => {
        setOfferNote(e.target.value)
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
            setItems((previousState) => {
                const newState = [...previousState]
                newState[index].offer= newFields.offer
                return newState;
            });
        }else{
            toast.error("NTY, offer too LOW");
        }

    }
  
        return (
            <div className="itemCard" key={item.id}>
                <h2>{item.name}</h2>
                <h3>{item.description}</h3>
                <input type="number" placeholder="Amount" onChange={handleValueChange} />
                <input type="text" placeholder="Message/Info" onChange={handleNoteChange} />
                <button onClick={() => { submitOffer(item.id, item.offer.value) }}>Submit Offer</button>
            </div>
        )
    
}
