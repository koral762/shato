import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {

    const [menuIsOpen, toggleMenu] = useState(false);

    const scrollToElemnt=(ev)=>{
        ev.stopPropagation();

        var infoElemnt=document.querySelector('#info');
        infoElemnt.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }

    return (
        <nav>
            <div className="main-nav">

                <div id="menu" onClick={() => toggleMenu(!menuIsOpen)} className={menuIsOpen ? "left-nav open" : "left-nav"}>
                <Link to='/dates' ><span className="link">זמינות</span></Link>
                <Link to='/review'><span className="link">ביקורות</span></Link>
                <Link to='/abutAs'><span className="link">מי אנחנו</span></Link>
                <Link to='/gallery'><span className="link">גלריה</span></Link>
                <Link to='/' ><span className="link">דף הבית</span></Link>
            </div>

            <div id="menu" className="left-nav-web">
                {/* <Link to='/shoppingcart'><p className="order-naw">הזמן חופשה</p></Link> */}
                <a className="a-icon i-whatsapp" href="https://wa.me/972524499904" target="_blank" rel="noreferrer noopener"><p className="order-naw">הזמן חופשה</p></a>
            </div>
            <button className="menu-btn-mobile" onClick={() => toggleMenu(!menuIsOpen)}><i className={menuIsOpen ? "fa fa-close" : "fa fa-align-justify"} style={{ fontSize: "20px" }}></i></button>
            <div className="right-nav">
                <Link to='/dates' ><span className="link ">זמינות</span></Link>
                <Link to='/review'><span className="link ">ביקורות</span></Link>
                <Link to='/'><span className="link " onClick={(ev)=>scrollToElemnt(ev)}>מי אנחנו</span></Link>
                <Link to='/gallery'><span className="link ">גלריה</span></Link>
                <Link to='/' ><span className="link ">דף הבית</span></Link>
            </div>

        </div>
        </nav >
    )
}