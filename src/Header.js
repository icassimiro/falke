import logo from "./Images/logo.png";

import pilsen from "./Images/pilsen.png";
import baron from "./Images/baron.png";
import diamantina from "./Images/diamantina.png";
import hoplager from "./Images/hoplager.png";
import ouropreto from "./Images/ouropreto.png";
import peregrinus from "./Images/peregrinus.png";

import React, { useState, useEffect, useMemo } from "react";

const Header = () => {
    const [sticky, setSticky] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    useMemo(() => {
        window.scrollTo({ top: 0 });
    }, [currentPage]);
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 65);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
    return (
        <nav className={`${sticky ? "sticky" : ""}`}>
            <div className="menubars">

                <div className="navimgdiv">
                    <img className="logoheader" src={logo}></img>
                </div>
                <div className="headerbeer">
                    <img src={pilsen} className="imgheaderbeer"></img>
                    <img src={baron} className="imgheaderbeer"></img>
                    <img src={hoplager} className="imgheaderbeer"></img>
                    <img src={diamantina} className="imgheaderbeer"></img>
                    <img src={ouropreto} className="imgheaderbeer"></img>
                    <img src={peregrinus} className="imgheaderbeer"></img>
                </div>



            </div>
        </nav>
    );
};
export default Header;