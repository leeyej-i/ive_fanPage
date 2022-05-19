import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';

const HeaderWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 80px;
    transition: 0.4s ease;
    background-color: rgba(0,0,0, 0.2);
    &.hide {
        transform: translateY(-80px);
    }
`;

const Header = ({ menuOpened, setMenuOpened }) => {

    const [hide, setHide] = useState(false);
    const [pageY, setPageY] = useState(0);
    const ref = useRef(document);

    const throttle = (callback, wait) => {
        // true로 주어서 콜백함수가 처음 한번은 바로 실행되도록 함
        let waiting = true;
        return function () {
            if (waiting) {
                callback();
                waiting = false;
                // wait만큼 시간이 지난 후, true로 바뀌면서 다시 실행됨.
                setTimeout(() => {
                    waiting = true;
                }, wait);
            }
        };
    };
    const handleScroll = () => {
        const { pageYOffset } = window;
        const moveY = pageYOffset - pageY;
        const hide = pageYOffset !== 0 && moveY >= 0;
        setHide(hide);
        setPageY(pageYOffset);
    };

    useEffect(() => {
        ref.current.addEventListener('scroll', throttle(handleScroll, 1000));
        return () =>
            ref.current.removeEventListener('scroll', throttle(handleScroll, 1000));
    }, [pageY]);

    const handleClickOpenMenu = () => {
        console.log(menuOpened)
        if (menuOpened === false) {
            menuOpened = true
        }
        else {
            menuOpened = false
        }
        console.log(menuOpened)
        setMenuOpened(menuOpened)
    }
    return (
        <HeaderWrap className={hide && 'hide'}>
            <div className="head-container">
                <h1 className="title"><a href="/">I ' V E</a></h1>
                <ul className="header-menu">
                    <li><a href="#main">MAIN</a></li>
                    <li><a href="#news">NEWS</a></li>
                    <li><a href="#member">MEMBER</a></li>
                    <li><a href="#album">ALBUMS</a></li>
                    <li><a href="#goods">GOODS</a></li>
                </ul>
                <button className="menu_btn" onClick={() => handleClickOpenMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </HeaderWrap>
    );
}

export default Header;