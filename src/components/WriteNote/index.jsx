import React, { useState } from "react";

const WriteNote = ({recieveData}) => {
    const [text, setText] = useState('');
    const handleChange = ({target}) => {
        setText(target.value)
        recieveData(target.value)
    }
    // console.log("text: " + text)
    return (
        <div className="field">
            <label className="field__label" htmlFor="text">Text uvnitř přáníčka</label>
            <textarea 
                className="field__input" 
                name="text" 
                id="text" 
                rows="3" 
                maxLength="100" 
                autoComplete="off"
                placeholder="Veselé Vánoce a štatný nový rok!"
                onChange={handleChange}
            />
            <p className="field__description">Zbývá <strong>{100 - text.length}</strong>/100 znaků.</p>
        </div>
    )
}

export default WriteNote;