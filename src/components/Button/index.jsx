import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({recieveData, recieveId}) => {
    const dataToSent = {
        "background": recieveData[0],
        "color": recieveData[1],
        "cover": recieveData[2],
        "music": recieveData[3],
        "snow": recieveData[4],
        "text": recieveData[5],
        "sender": recieveData[6]
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