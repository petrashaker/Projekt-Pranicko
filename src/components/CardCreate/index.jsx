import React from "react";
import { useState } from "react";
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


const CardCreate = ({handleIdRecieved}) => {
	//přijmutí dat z komponenty Button
	const [dataReceived, setDataReceived] = useState([]);
	const recieveId = (dataReceived) => {
	  setDataReceived([...dataReceived, dataReceived])
	  handleIdRecieved(dataReceived)
	}
	// console.log("dataReceived: " + dataReceived)

	const[backgroundChosen, setBackgroundChosen] = useState(null)
	const recieveBackground = (backgroundChosen) => {
		setBackgroundChosen(backgroundChosen)
	}
	//console.log("backgroundChosen: " + backgroundChosen)
	
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

	let cardDefault = ["red", "red", "gifts", "jingle-bells", 0, "Veselé Vánoce a štatný nový rok!", "Ježíšek"]
	
	let cardChosen = []
	cardChosen.push(backgroundChosen, colourChosen, picChosen, musicChosen, snowChosen, noteWritten, sender)
	
	let cardDone = cardDefault.concat(cardChosen)
	cardDone = cardDone.filter((item, index) => {return (cardDone.indexOf(item) == index) })
	// console.log("cardDefault: " + cardDefault)
	// console.log("cardChosen: " + cardChosen)
	// console.log("cardDone: " + cardDone)

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
						<Button recieveData={cardChosen} recieveId={recieveId}/>
					</form>

				</div>
			</div>
		</main>
		</>
    )
}

export default CardCreate;