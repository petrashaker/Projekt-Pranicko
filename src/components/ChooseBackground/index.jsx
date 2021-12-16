import React, { useState } from "react";

const ChooseBackground = ({backgrounds, recieveData}) => {
    const [chooseBackground, setChooseBackground] = useState('red');
    const handleChange = ({target}) => {
        setChooseBackground(target.value)
        recieveData(target.value)
    }
    // console.log("chooseBackground " + chooseBackground)
    return (
        <div className="field">
            <label className="field__label">Pozadí stránky</label>

            <div className="field__swatch-group field__swatch-group--round">

                {backgrounds.map((b, id) => 
                    <div className="field__swatch" key={b.value + id}>
                        <input 
                            type="radio" 
                            name="background" 
                            id={"background-" + b.value}  
                            value={b.value}
                            onChange={handleChange}
                            defaultChecked={b.value == chooseBackground}
                        />
                        <label htmlFor={"background-" + b.value} className={"swatch--" + b.value} data-description={b.description}></label>
                    </div>
                )}

            </div>

        </div>
    )
}

export default ChooseBackground;