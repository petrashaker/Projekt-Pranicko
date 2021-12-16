import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({recieveData}) => {
    const [formData, setFormData] = useState("M5KBWX");

    const dataToSent = {
        "background": recieveData[0],
        "color": recieveData[1],
        "cover": recieveData[2],
        "music": recieveData[3],
        "snow": recieveData[4],
        "text": recieveData[5],
        "sender": recieveData[6]
    }
    // const dataToSent = {
    //     "background": "green",
    //     "color": "red",
    //     "cover": "gifts",
    //     "music": "jingle-bells",
    //     "snow": 1,
    //     "text": "Text vánočního přání",
    //     "sender": "Alena"
    // }    
  
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
            console.log(json.data) 
            const jsonData = json.data.id
            console.log("jsonData: " + jsonData)
            
            // setFormData(jsonData)
            // setFormData([...formData, jsonData])
             
        })
    }
    console.log("formData: " + formData)
   useEffect((jsonData) => {
       fetchData();
    //    setFormData([...formData, jsonData])
    // setFormData(jsonData)
   }, [])

    const navigate = useNavigate();
    const handleClick = () => {
        fetchData();
        navigate('/prani-pripraveno', {replace:true})
        // setFormData(jsonData)
        // console.log("formData: " + formData)
        // recieveData(jsonData);
        
        
    }
   
    return (
        <button type="submit" className="button button--big mt-30" onClick={handleClick}>
            Uložit přáníčko
        </button>
    )
}

export default Button;