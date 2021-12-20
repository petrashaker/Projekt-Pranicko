import React, { useState } from "react";

const Sender = ({recieveData}) => {
    const [sentBy, setSentBy] = useState('');
    const handleChange = ({target}) => {
        setSentBy(target.value)
        recieveData(target.value)
    }
    // console.log("sent: " + sentBy)
    return (
        <div className="field">
        <label className="field__label" htmlFor="sender">Odesílatel (podpis)</label>
        <input 
            className="field__input" 
            type="text" 
            name="sender" 
            id="sender" 
            rows="3" 
            maxLength="20" 
            autoComplete="off" 
            placeholder="Ježíšek"
            onChange={handleChange}
        />
    </div>
    )
}

export default Sender;