import React from "react";
import Goods from "./Goods.js";

const GoodsList = () => {

    const transformPrev = (event) => {
        const slidePrev = event.target;
        const slideNext = slidePrev.nextElementSibling;

        const goodsList = slidePrev.parentElement.parentElement.nextElementSibling;
        let activeLi = goodsList.getAttribute('data-position');
        const liList = goodsList.getElementsByTagName('li')

        if (goodsList.clientWidth < (liList.length * 260 + Number(activeLi))) {
            activeLi = Number(activeLi) - 270; //오른쪽으로 이동했으니까 data-position(시작위치)값 빼주기
            //오른쪽 버튼 활성화
            slideNext.style.color = '#2f3059';
            slideNext.classList.add('slide-next-hover');
            slideNext.addEventListener('click', transformNext)

            // 왼쪽버튼이 비활성화되어야 하는 경우
            if (goodsList.clientWidth > (liList.length * 270 + Number(activeLi))) {
                slidePrev.style.color = '#cfd8dc';
                slidePrev.classList.remove('slide-prev-hover');
                slidePrev.removeEventListener('click', transformPrev)
            }
        }
        //반영
        goodsList.style.transition = 'transform 1s';
        goodsList.style.transform = 'translateX(' + String(activeLi) + 'px)';
        goodsList.setAttribute('data-position', activeLi);
    }

    const transformNext = (event) => {
        const slideNext = event.target;
        const slidePrev = slideNext.previousElementSibling;

        const goodsList = slideNext.parentElement.parentElement.nextElementSibling;
        let activeLi = goodsList.getAttribute('data-position');
        const liList = goodsList.getElementsByTagName('li')

        //왼쪽으로 넘쳤을 때
        if (Number(activeLi) < 0) {
            activeLi = Number(activeLi) + 270; //왼쪽으로 이동했으니까 data-position(시작위치)값 더하기
            //왼쪽 버튼 활성화
            slidePrev.style.color = '#2f3059';
            slidePrev.classList.add('slide-next-hover');
            slidePrev.addEventListener('click', transformPrev);
            // 오늘쪽 버튼이 비활성화되어야 하는 경우
            if (Number(activeLi) == 0) {
                slideNext.style.color = '#cfd8dc';
                slideNext.classList.remove('slide-next-hover');
                slideNext.removeEventListener('click', transformNext)
            }
        }
        //반영
        goodsList.style.transition = 'transform 1s';
        goodsList.style.transform = 'translateX(' + String(activeLi) + 'px)';
        goodsList.setAttribute('data-position', activeLi);
    }

    return (
        <section className="goods-section" id="goods">
            <div className="goods-inner">
                <div className="roadmap-container">
                    <div className="roadmap-title-container">
                        <h1 className="subtitle">GOODS</h1>
                        <div className="arrow-container">
                            <i className="slide-prev fas fa-chevron-circle-left" onClick={(event) => transformPrev(event)}></i>
                            <i className="slide-next fas fa-chevron-circle-right" onClick={(event) => transformNext(event)}></i>
                        </div>
                    </div>
                    <ul className="goods-list" data-position="0">
                        <Goods goodsNum={0} />
                        <Goods goodsNum={1} />
                        <Goods goodsNum={2} />
                        <Goods goodsNum={3} />
                        <Goods goodsNum={4} />
                        <Goods goodsNum={5} />
                        <Goods goodsNum={6} />
                        <Goods goodsNum={7} />
                        <Goods goodsNum={8} />
                        <Goods goodsNum={9} />
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default GoodsList;