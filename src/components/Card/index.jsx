import React from "react";
import { useParams } from "react-router-dom";
import Snowfall from "react-snowfall";
import { useEffect, useState } from "react";
import { useAudio } from "../../hooks/useAudio"

const Card = ({card}) => {
    // const {id} = useParams()
    // const [card, setCard] = useState(null);
    const [background, setBackground] = useState(["red", "green", "blue", "gold", "tree", "decorations", "snow"])
    const [cardColour, setCardColour] = useState(["red", "green", "blue", "gold"])
    const [isPlaying, play, pause] = useAudio('../../assets/audio/jingle-bells.mp3');
    const [openCard, setOpenCard] = useState("")
    const [open, setOpen] = useState(false)
    //const [music, setMusic] = useState(["god-rest", "silent-night", "jingle-bells"])

    const handleCardOpen = () => {
        setOpenCard(openCard ? "" : "card--open")
        if(openCard) {
            pause()
            setOpen(false)
        } else {
            play()
            setOpen(true)
        }
    }
    console.log("card in Card komp: " + card)
    console.log(background)
    console.log("card.background: " + card.background)
    console.log("card?.id: " + card?.id)
    console.log("card.sender: " + card.sender)
    return card &&(
        // <div className="background">
        <div className={"background background--" + background.find(b => card?.background == b)}>

                        
            <div className="music">
                <p>Hudba právě { isPlaying ? 'hraje' : 'nehraje' }.</p>
                <button onClick={() => play()}>Přehraj hudbu</button>
                <button onClick={() => pause()}>Zastav hudbu</button>
            </div>

            <div className="snow">
                    <Snowfall snowflakeCount={card.snow} />
            </div>

            <div className="card" onClick={handleCardOpen}>
                
                <div className="cover">
                    {/* <img className="cover__image" src="../../assets/covers/gifts.svg"/> */}
                    <img className="cover__image" src={"../../assets/covers/" + card?.cover +".svg"}/>
                </div>
            
                <div className="inside-left">
                    <div className="inside-left__content">
                        {/* <div className="inside-left__text">Merry Xmas</div>
                        <div className="inside-left__sender">Love</div> */}
                        <div className="inside-left__text">{card?.text}</div>
                        <div className="inside-left__sender">{card?.sender}</div>
                    </div>
                    <img className="inside-left__logo" src="../../assets/czechitas.svg" alt="Czechitas"/>
                </div>
            
                <div className="inside-right">
                    <div className="photo photo1"><img src="../../assets/photos/photo1.jpg"/></div>
                    <div className="photo photo2"><img src="../../assets/photos/photo2.jpg"/></div>
                    <div className="photo photo3"><img src="../../assets/photos/photo3.jpg"/></div>
                    <div className="photo photo4"><img src="../../assets/photos/photo4.jpg"/></div>
                </div>

            </div> 

            <p className="instructions">Kliknutím mě {open ? "zavři" : "otevři"}</p>

        </div> 
    )
}

export default Card;