import React from "react";
import { NavLink } from "react-router-dom";

let activeStyle = "menu__link menu__link--active";
let notActiveStyle = "menu__link";
const menuLinkActive = ({isActive}) => isActive? activeStyle : notActiveStyle;

const Header = () => (
<>
    <nav className="menu">
        <NavLink className={menuLinkActive} to="/">Úvod</NavLink>
        <NavLink className={menuLinkActive} to="/vytvor-si-prani">Vytvořit přáníčko</NavLink>
        <NavLink className={menuLinkActive} to="/vyzvedni-si-prani">Vyzvednout</NavLink>
    </nav>


    <div className="header">
        <h1 className="header__title">Vánoční přáníčko</h1>
    </div>
</>
)

export default Header;