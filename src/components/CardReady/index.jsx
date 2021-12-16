import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const CardReady = ({cardid}) => {
    const {kod} = useParams();
    const navigate = useNavigate();
	
	const [dataReceived, setDataReceived] = useState('');
	//přijmutí dat z komponenty Button
	const recieveData = (dataReceived) => {
	  setDataReceived(dataReceived)
	}
	console.log("dataReceived: " + dataReceived)
	
    return(
        <>
        <div className="header">
		<h1 className="header__title">Přáníčko je připravené</h1>
	    </div>


	<main className="content">

		<div className="pickup">

			<p className="pickup__label">Přímý odkaz na přáníčko</p>

			<div className="box shadow mb-30">
				<div className="box__inside pt-0 pb-0">
					<a href={"https://tvuj-web.cz/card/" + kod} className="pickup__url">https://tvuj-web.cz/card/{kod}</a>
					{/* <a href="https://tvuj-web.cz/card/abc123" className="pickup__url">https://tvuj-web.cz/card/abc123</a> */}
					<p className="pickup__description">
						Tento odkaz pošli emailem, přes messenger nebo ho dej na sociální sítě. Po kliknutí na odkaz se zobrazí tvoje přáníčko.
					</p>
				</div>
			</div>


			<p className="pickup__label">Kód tvého přáníčka</p>

			<div className="box shadow mb-30">
				<div className="box__inside pt-0 pb-0">
					<div className="pickup__code">{kod}</div>
					{/* <div className="pickup__code">ABC123</div> */}
					<p className="pickup__description">
						S tímto kódem si kdokoliv může vyzvednout tvoje uložené přáníčko. Hodí se, když chceš přáníčko poslat třeba SMSkou a nechceš opisovat celou adresu.
					</p>
				</div>
			</div>

			<button className="button button--big" onClick={() => navigate('/vytvor-si-prani', {replace:true})}>Vytvořit další přáníčko</button>

		</div>

	</main>
    </>
    )
}

export default CardReady;