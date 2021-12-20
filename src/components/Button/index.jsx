import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({recieveData, recieveId}) => {
    const dataToSent = {
        "background": recieveData[0] || "red",
        "color": recieveData[1] || "red",
        "cover": recieveData[2] || "gifts",
        "music": recieveData[3] || "jingle-bells",
        "snow": recieveData[4] || 0,
        "text": recieveData[5] || "Veselé Vánoce a štatný nový rok!",
        "sender": recieveData[6] || "Ježíšek"
    }   
  
    const fetchData = () => {
        fetch('https://xmas-api.itgirls.cz/cards', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSent)
        })
        .then(response => response.json())
        .then(json => {
            return recieveId(json.data.id)
        })
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    const navigate = useNavigate();
    const handleClick = () => {
        fetchData() 
        navigate('/prani-pripraveno', {replace:true})   
    }

    return (
        <button type="submit" className="button button--big mt-30" onClick={handleClick}>
            Uložit přáníčko
        </button>
    )
}

export default Button;