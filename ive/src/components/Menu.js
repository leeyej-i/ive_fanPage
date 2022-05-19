import React, { useState } from "react";


const Menu = ({ menuOpened, setMenuOpened }) => {

    const handleClickOpenMenu = () => {
        console.log(menuOpened);
        if (menuOpened === false) {
            menuOpened = true
        }
        else {
            menuOpened = false;
        }
        setMenuOpened(menuOpened);


    }
    return (
        <div className={menuOpened === false ? "menu-box" : "menu-box-active"}>
            <div className="btn-box">
                <button className="menu_btn" onClick={() => handleClickOpenMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <ul className="menu">
                <li><a href="#main" onClick={() => handleClickOpenMenu()}>MAIN</a></li>
                <li><a href="#news" onClick={() => handleClickOpenMenu()}>NEWS</a></li>
                <li>
                    <a href="#member" onClick={() => handleClickOpenMenu()}>MEMBER</a>
                    <ul className="member">
                        <li><a href="#member0" onClick={() => handleClickOpenMenu()}>유진</a></li>
                        <li><a href="#member1" onClick={() => handleClickOpenMenu()}>가을</a></li>
                        <li><a href="#member2" onClick={() => handleClickOpenMenu()}>레이</a></li>
                        <li><a href="#member3" onClick={() => handleClickOpenMenu()}>원영</a></li>
                        <li><a href="#member4" onClick={() => handleClickOpenMenu()}>리즈</a></li>
                        <li><a href="#member5" onClick={() => handleClickOpenMenu()}>이서</a></li>
                    </ul>
                </li>
                <li><a href="#album" onClick={() => handleClickOpenMenu()}>ALBUMS</a></li>
                <li><a href="#goods" onClick={() => handleClickOpenMenu()}>GOODS</a></li>
            </ul>
        </div>
    )
}

export default Menu;

