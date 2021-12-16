import React, { useState } from "react";

const ChooseSnow = ({snow, recieveData}) => {
    const [chooseSnow, setChooseSnow] = useState("0");
    const handleChange = ({target}) => {
        setChooseSnow(target.value)
        recieveData(target.value)
    }
    // console.log("chooseSnow " + chooseSnow)
    return (
        <div className="field">
        <label className="field__label ">Sníh na pozadí</label>

        <div className="field__radio-group">
            {snow.map((s, id) =>
                <div className="field__radio" key={s+id}>
                    <input 
                        type="radio" 
                        name="snow" 
                        id={"snow-" + s.value} 
                        value={s.value}
                        onChange={handleChange}
                        defaultChecked={s.value == chooseSnow}
                    />
                    <label htmlFor={"snow-" + s.value}>{s.description}</label>
                </div>
            )}
        </div>
        </div>
    )
}

export default ChooseSnow;