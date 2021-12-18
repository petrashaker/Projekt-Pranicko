import React, { useState } from "react";

const ChooseMusic = ({music, recieveData}) => {
    const [chooseMusic, setChooseMusic] = useState('jingle-bells');
    const handleChange = ({target}) => {
        setChooseMusic(target.value)
        recieveData(target.value)
        
    }
    // console.log("chooseMusic " + chooseMusic)
    return (
        <div className="field">
            <label className="field__label">Hudba</label>

            <div className="field__radio-group">
                {music.map((m, id) =>
                    <div className="field__radio" key={m+id} >
                        <input 
                            type="radio" 
                            name="music" 
                            id={"music-" + m.value} 
                            value={m.value} 
                            onChange={handleChange} 
                            defaultChecked={m.value == chooseMusic}
                        />
                        <label htmlFor={"music-" + m.value}>{m.description}</label>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default ChooseMusic;