import React from "react";
import useScrollFadeIn from "../hooks/useScrollFadeIn.js";
import yujin from "../src_assets/yujin2.jpg"
import gaeul from "../src_assets/gaeul2.jpg"
import rei from "../src_assets/rei2.jpg"
import wonyoung from "../src_assets/wonyoung2.jpg"
import liz from "../src_assets/liz2.jpg"
import leeseo from "../src_assets/leeseo2.jpg"
import instagramUrl from "../src_assets/instagram.png"

const Member = ({ memberIndex }) => {
    const memberName = ['유진', '가을', '레이', '원영', '리즈', '이서']
    const memberBirth = ['2003년 9월 1일', '2002년 9월 24일', '2004년 2월 3일', '2004년 8월 31일', '2004년 11월 21일', '2007년 2월 21일']
    const memberSymbol = ['YOU-GREEN', 'GOAL-NAVY', 'CURIOSITY-PUPLE', 'VICTORY-RED', 'TASTE-Orange', 'SPARK-BLUE']
    const memberMent = ['IVE에서 보컬과 카리스마 뿜뿜 리더를 맡고 있는 유진입니다!',
        'IVE에서 감성래퍼와 요정을 맡고 있는 가을입니다!',
        'IVE에서 사랑둥이, 유니크함과 랩을 맡고 있는 레이입니다!',
        'IVE에서 대체불가 매력과 보컬을 맡고 있는 원영입니다!',
        'IVE에서 음색요정과 보컬을 맡고 있는 리즈입니다!',
        'IVE에서 비타민 막내와 보컬을 맡고 있는 이서입니다!']
    const memberInfo1 = ['"내가 짱이다", "즐기자"라는 좌우명을 가질 정도로 외향적이나 사실은 상처를 잘 받는 외강내유형 스타일',
        '감정 기복이 거의 없는 차분하고 침착한 성격의 소유자이자 노력형 캐릭터',
        '"항상 겸허하게 초심을 잃지 말기"라는 좌우명을 가진 해맑고 귀여운 일본 멤버',
        '당당함, 자유로움, 센스, 귀여움의 아이콘이자 항상 밝고 긍정적인 에너지를 쏟아내는 멤버',
        '몽환적인 보컬이자 가성을 잘 이용할 줄 아는 "극락파트" 제조기',
        '어린나이임에도 불구하고 뛰어난 춤 실력을 가지고 있는 애교 덩어리 막내']
    const imgUrl = [yujin, gaeul, rei, wonyoung, liz, leeseo]
    const instagram = ["https://www.instagram.com/_yujin_an/", "", "", "https://www.instagram.com/for_everyoung10/", "", ""]
    const id = "member" + memberIndex;
    const animatedItem = useScrollFadeIn();

    return (
        <div className="member" id={id}>
            <div {...animatedItem} className="member-box">
                <img className="member-img" src={imgUrl[memberIndex]} />
                <div className="member-info-box">
                    <div className="member-title-box">
                        <h1 className="member-name">{memberName[memberIndex]}</h1>
                        {instagram[memberIndex] === "" ? null : <a href={instagram[memberIndex]}><img src={instagramUrl}></img></a>}

                    </div>
                    <h2>{memberBirth[memberIndex]}</h2>
                    <h2>{memberSymbol[memberIndex]}</h2>
                    <h2>{memberMent[memberIndex]}</h2>
                    <h3>{memberInfo1[memberIndex]}</h3>
                </div>
            </div>
        </div>
    );
};

export default Member;