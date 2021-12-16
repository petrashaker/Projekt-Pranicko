import React from "react";
import { useState } from "react/cjs/react.development";
import configuration from "../../configuration";
import Button from "../Button";
import ChooseBackground from "../ChooseBackground";
import ChooseColour from "../ChooseColour";
import ChooseMusic from "../ChooseMusic";
import ChoosePicture from "../ChoosePicture";
import ChooseSnow from "../ChooseSnow";
import Header from "../Header";
import Sender from "../Sender";
import WriteNote from "../WriteNote";


const CardCreate = () => {
	const [dataReceived, setDataReceived] = useState([]);
	//přijmutí dat z komponenty Button
	const recieveData = (dataReceived) => {
	  setDataReceived([...dataReceived, dataReceived])
	}
	// console.log("dataReceived: " + dataReceived)
	const[backgroundChosen, setBackgroundChosen] = useState(null)
	const recieveBackground = (backgroundChosen) => {
		setBackgroundChosen(backgroundChosen)
	}
	// console.log("backgroundChosen: " + backgroundChosen)
	
	const[colourChosen, setColourChosen] = useState(null)
	const recieveColour= (colourChosen) => {
		setColourChosen(colourChosen)
	}
	// console.log("colourChosen: " + colourChosen)
	
	const[picChosen, setPicChosen] = useState(null)
	const recievePic= (picChosen) => {
		setPicChosen(picChosen)
	}
	// console.log("picChosen: " + picChosen)
	
	const[snowChosen, setSnowChosen] = useState(null)
	const recieveSnow = (snowChosen) => {
		setSnowChosen(snowChosen)
	}
	// console.log("snowChosen: " + snowChosen)

	const[musicChosen, setMusicChosen] = useState(null)
	const recieveMusic= (musicChosen) => {
		setMusicChosen(musicChosen)
	}
	// console.log("musicChosen: " + musicChosen)
	
	const[noteWritten, setNoteWritten] = useState(null)
	const recieveNote= (noteWritten) => {
		setNoteWritten(noteWritten)
	}
	// console.log("noteWritten: " + noteWritten)
	
	const[sender, setSender] = useState(null)
	const recieveSender= (sender) => {
		setSender(sender)
	}
	// console.log("sender: " + sender)


	// const dataToSent = {
    //     "background": "green",
    //     "color": "red",
    //     "cover": "gifts",
    //     "music": "jingle-bells",
    //     "snow": 1,
    //     "text": "Text vánočního přání",
    //     "sender": "Alena"
    // }
	let card = []
	// card.push("background", backgroundChosen, "color", colourChosen, "cover", picChosen, "music", musicChosen, "snow", snowChosen,"text", noteWritten, "sender", sender)
	card.push( backgroundChosen, colourChosen, picChosen, musicChosen, snowChosen, noteWritten, sender)
	console.log("card: " + card)

	// let cardObject = Object.fromEntries(card)
	// console.log(cardObject)



    return(
		<>
		<Header />	
		<main className="content">

			<div className="box">
				<div className="box__inside">

					<form className="configurator">
                        <ChooseBackground backgrounds={configuration.backgrounds} recieveData={recieveBackground} />
                        <ChooseColour colours={configuration.colors} recieveData={recieveColour}/>
                        <ChoosePicture pictures={configuration.covers} recieveData={recievePic}/>
                        <ChooseSnow snow={configuration.snow} recieveData={recieveSnow}/>
                        <ChooseMusic music={configuration.music} recieveData={recieveMusic}/>
						<WriteNote recieveData={recieveNote}/>
						<Sender recieveData={recieveSender}/>
						<Button recieveData={card}/>
					</form>

				</div>
			</div>
		</main>
		</>
    )
}

export default CardCreate;