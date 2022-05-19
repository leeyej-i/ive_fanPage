import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header.js"
import Menu from "./components/Menu.js";
import Main from "./components/Main.js";
import News from "./components/News.js";
import Group from "./components/Group.js";
import Album from "./components/Album.js";
import Footer from "./components/Footer.js";
import GoodsList from "./components/GoodsList.js";
import styled from 'styled-components';
import './style.css';

const AWrap = styled.div`
    &.hide {
        display:none;
    }
`;
function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [hide, setHide] = useState(true);
  const [pageY, setPageY] = useState(0);
  const ref = useRef(document);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const hide = pageYOffset == 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  function throttle(callback, wait) {
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

  useEffect(() => {
    ref.current.addEventListener('scroll', throttle(handleScroll, 1000));
    return () =>
      ref.current.removeEventListener('scroll', throttle(handleScroll, 1000));
  }, [pageY]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      <Menu
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened} />
      <Main />
      <News />
      <Group />
      <div className="albums">
        <h1 className="subtitle">ALBUMS</h1>
        <Album albumIndex={0} vector={0} />
        <Album albumIndex={1} vector={1} />
      </div>
      <GoodsList />
      <AWrap className={hide && 'hide'}>
        <a id="backtotop" onClick={() => scrollToTop()}></a>
      </AWrap>
      <Footer />
    </>
  )
}

export default App;
