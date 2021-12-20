import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card";

const FetchData = () => {
    const { id } = useParams();
    console.log(id)
    console.log(`https://xmas-api.itgirls.cz/cards/${id}`)
    const [card, setCard] = useState(null)

    const fetchData = () => {
        fetch(`https://xmas-api.itgirls.cz/cards/${id}`)
        .then(response => response.json())
        .then(json => setCard(JSON.stringify(json.data)))
        // .then(json => setCard(json.success)) funguje
        
    }
   
    useEffect(() => {
        fetchData()
    }, [id])
    console.log("card: " + card)  
    
    // return (
    //     <p>Tady má být přání</p>
    // )
    // return card && <Card card={card}/>
    return card && <Card card={card}/>
}

export default FetchData