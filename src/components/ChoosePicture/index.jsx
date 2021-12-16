import React, { useState } from "react";

const ChoosePicture = ({pictures, recieveData}) => {
    const [choosePic, setChoosePic] = useState('gifts');
    const handleChange = ({target}) => {
        setChoosePic(target.value)
        recieveData(target.value)
    }
    // console.log("choosePic " + choosePic)
    return (
        <div className="field">
        <label className="field__label">Obrázek na obálce</label>

        <div className="field__swatch-group field__swatch-group--big">

            {pictures.map((p,id) =>
                <div className="field__swatch" key={p+id}>
                    <input 
                        type="radio" 
                        name="cover" 
                        id={"cover-" + p.value} 
                        value={p.value}
                        onChange={handleChange}
                        defaultChecked={p.value == choosePic}
                    />
                    <label htmlFor={"cover-" + p.value} className={"swatch--cover-" + p.value} data-description={p.description}></label>
                </div>
            )}

        </div>

        </div>
    )
}

export default ChoosePicture;