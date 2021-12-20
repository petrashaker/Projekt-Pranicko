import React from "react";

import { useParams } from "react-router-dom";
import Card from "../Card";

const GetData = () => {
    const {id} = useParams
    const [card, setCard] = useState(null)

    useEffect(() => {
        fetch(`https://xmas-api.itgirls.cz/cards/${id}`)
        .then(response => response.json())
        .then(json => setCard(json.data))
    }, [])
    console.log("card: " +  card)

    return card && <Card card = {card}/>
}

export default GetData