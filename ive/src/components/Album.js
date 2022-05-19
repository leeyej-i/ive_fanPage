import React from "react";
import useScrollFadeIn from "../hooks/useScrollFadeIn.js";

const Album = ({ albumIndex, vector }) => {
    const albumName = ['The 1st Single <ELEVEN>', 'The 2nd Single \n<LOVE DIVE>']
    const albumInfo = [`01 ELEVEN - Title \n
    미니멀하지만 에너제틱하고, 리드미컬하면서도 다양한 변주가 백미인 팝 댄스곡. 사랑에 빠진 소녀의 마음이 환상적인 색깔로 물드는 모습을 표현한 가사와 더불어 다채롭고 신비한 IVE 의 분위기를 대표하는 곡.
    \n02 Take It\n
    라틴 감성을 반영한 EDM 신스 프레이징과 트랩 그루브의 콜라보를 통해 거칠지만 신선한 강렬함을 선사하는 트랙.`,
        `01.LOVE DIVE - Title\n
    중독성 있는 후렴구와 퍼커션 사운드가 주를 이룬 다크 모던 팝 장르의 곡. 기승전결에 따라 분위기가 혼합돼 파트마다 반전의 느낌을 주는 아이브 고유의 컬러가 강조된 곡.
    \n02.ROYAL\n 
    아이브의 화려함과 세련함을 표현한 팝 댄스곡. 그루비하고 펑키한 하우스 타입의 베이스라인은 패션쇼의 캣워크를 뽐내는 듯한 느낌을 주고, 매끄럽고 소울풀한 신스 사운드는 우아함과 강렬한 에너지를 뒷받침하고 있다.`]
    const imgUrl = ["./img/eleven.jpg", "./img/lovedive.jpg"]
    const melon = ["https://www.melon.com/album/detail.htm?albumId=10798794", "https://www.melon.com/album/detail.htm?albumId=10909179"]
    const genie = ["https://www.genie.co.kr/detail/albumInfo?axnm=82417569", "https://www.genie.co.kr/detail/albumInfo?axnm=82624363"]
    const animatedItemLeft = useScrollFadeIn("left", 1, 0);
    const animatedItemRight = useScrollFadeIn("right", 1, 0);
    const animatedItem = useScrollFadeIn();
    return (
        <>
            {vector === 0 ? (
                <div {...animatedItemRight} className="album-left" id="album">
                    <h2>{albumName[albumIndex]}</h2>
                    <div className="album-box-left">
                        <img className="album-img" src={imgUrl[albumIndex]} />
                        <div className="album-info-box-left">
                            <h3  {...animatedItem}>{albumInfo[albumIndex]}</h3>
                            <div className="a-container">
                                <a href={melon[albumIndex]}><img src="./img/melon.png"></img></a>
                                <a href={genie[albumIndex]}><img src="./img/ginie.png"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            )
                :
                (
                    <div {...animatedItemLeft} className="album-right" id="album">
                        <h2>{albumName[albumIndex]}</h2>
                        <div className="album-box-right">
                            <div className="album-info-box-right">
                                <h3  {...animatedItem}>{albumInfo[albumIndex]}</h3>
                                <div className="a-container-right">
                                    <a href={melon[albumIndex]}><img src="./img/melon.png"></img></a>
                                    <a href={genie[albumIndex]}><img src="./img/ginie.png"></img></a>
                                </div>
                            </div>
                            <img className="album-img" src={imgUrl[albumIndex]} />
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Album;