import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const CardReady = ({idRecieved}) => {
    const navigate = useNavigate();
	
    return(
    <>
		<nav className="menu">
			<NavLink className="menu__link" to="/">Úvod</NavLink>
			<NavLink className="menu__link menu__link--active" to="/vytvor-si-prani">Vytvořit přáníčko</NavLink>
			<NavLink className="menu__link" to="/vyzvedni-si-prani">Vyzvednout</NavLink>
		</nav>


		<div className="header">
			<h1 className="header__title">Přáníčko je připravené</h1>
		</div>
		<main className="content">

			<div className="pickup">

				<p className="pickup__label">Přímý odkaz na přáníčko</p>

				<div className="box shadow mb-30">
					<div className="box__inside pt-0 pb-0">
						<a href={`https://wish-you-merry-xmas.netlify.app/card/${idRecieved}`} className="pickup__url">https://wish-you-merry-xmas.netlify.app/card/{idRecieved}</a>
						<p className="pickup__description">
							Tento odkaz pošli emailem, přes messenger nebo ho dej na sociální sítě. Po kliknutí na odkaz se zobrazí tvoje přáníčko.
						</p>
					</div>
				</div>


				<p className="pickup__label">Kód tvého přáníčka</p>

				<div className="box shadow mb-30">
					<div className="box__inside pt-0 pb-0">
						<div className="pickup__code">{idRecieved}</div>
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