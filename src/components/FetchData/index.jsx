import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card";

const FetchData = () => {
    const { id } = useParams();
    const [card, setCard] = useState(null)

    const fetchData = () => {
        fetch(`https://xmas-api.itgirls.cz/cards/${id}`)
        .then(response => {
            if(response.ok) {
                return response.json()
            }
            throw new Error('Request failed!')
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => setCard(jsonResponse.data))
    }
   
    useEffect(() => {
        fetchData()
    }, [id])
    
    return card && <Card card={card}/>
}

export default FetchData