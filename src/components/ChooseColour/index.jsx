import React, { useState } from "react";

const ChooseColour = ({colours, recieveData}) => {
    const [chooseColour, setChooseColour] = useState('red');
    const handleChange = ({target}) => {
        setChooseColour(target.value)
        recieveData(target.value)
    }
    // console.log("chooseColour " + chooseColour)
    return (
        <div className="field">
            <label className="field__label">Barva přáníčka</label>

            <div className="field__swatch-group field__swatch-group--round">

                {colours.map((c, id) =>
                    <div className="field__swatch" key={c + id}>
                        <input 
                            type="radio" 
                            name="color" 
                            id={"color-" + c.value} 
                            value={c.value}
                            onChange={handleChange}
                            defaultChecked={c.value == chooseColour}        
                        />
                        <label htmlFor={"color-" + c.value} className={"swatch--" + c.value} data-description={c.description}></label>
                    </div>
                )}

            </div>

        </div>
    )
}

export default ChooseColour;
