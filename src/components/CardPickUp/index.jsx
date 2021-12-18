import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../Header";

const CardPickUp = () => {
	const navigate = useNavigate();
	const [code, setCode] = useState('')
	
	const handleChange = ({target}) => {
		setCode(target.value)
	}

	const handleClick = () => {
		navigate(`/card/${code}`, {replace:true}) 
	}
    return(
		<>
		<Header />
        <main className="content">

		<form className="pickup" autoComplete="off" >
			<label htmlFor="pickup-code" className="pickup__label">Zadej šestimístný kód přáníčka</label>

			<div className="box shadow mb-30">
				<div className="box__inside pt-0 pb-0" >

					<input id="pickup-code" className="pickup__code" type="text" maxLength="6" autoComplete="off" onChange={handleChange} value={code}/>

				</div>
			</div>

			<button className="button button--big" onClick={handleClick}>Vyzvednout přáníčko</button>

		</form>
	    </main>
		</>
    )
}

export default CardPickUp;