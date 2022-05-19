import React from "react";
import good1 from "../src_assets/goods1.jpg"
import good2 from "../src_assets/goods2.jpg"
import good3 from "../src_assets/goods3.jpg"
import good4 from "../src_assets/goods4.jpg"
import good5 from "../src_assets/goods5.jpg"
import good6 from "../src_assets/goods6.jpg"
import good7 from "../src_assets/goods7.jpg"
import good8 from "../src_assets/goods8.jpg"
import good9 from "../src_assets/goods9.jpg"
import good10 from "../src_assets/goods10.jpg"

const Goods = ({ goodsNum }) => {
    const goodsPrice = ['44,700원', '14,900원', '14,900원', '14,900원', '9,000원', '15,000원', '29,800원', '14,900원', '110,700원', '40,000원']
    const goodsName = ['(VER SET) IVE THE 2ND SINGLE ALBUM LOVE DIVE', '(VER.3) IVE THE 2ND SINGLE ALBUM LOVE DIVE', '(VER.2) IVE THE 2ND SINGLE ALBUM LOVE DIVE', '(VER.1) IVE THE 2ND SINGLE ALBUM LOVE DIVE', '아이브(IVE) 싱글 1집 ELEVEN 뱃지', '아이브(IVE) 싱글 1집 ELEVEN 포토 슬로건', '(SET) IVE The 1st Single Album ELEVEN', '(ver.2) IVE The 1st Single Album ELEVEN', 'IVE THE 2ND SINGLE ALBUM LOVE DIVE', 'IVE(아이브) 2022 WELCOME PACKAGE']
    const goodsType = ['HOT', 'NEW', 'NEW', 'NEW', ' ', ' ', 'BEST', ' ', 'SOLD OUT', 'SOLD OUT']
    const imgUrl = [good1, good2, good3, good4, good5, good6, good7, good8, good9, good10]
    const siteUrl = ["https://starship-square.com/shop/shopdetail.html?branduid=3554387&xcode=002&mcode=008&scode=001&type=Y&sort=regdate&cur_code=002008&GfDT=bWZ3UQ%3D%3D",
        "https://starship-square.com/shop/shopdetail.html?branduid=3554386&xcode=002&mcode=008&scode=001&type=Y&sort=regdate&cur_code=002008&GfDT=bWh3UA%3D%3D",
        "https://starship-square.com/shop/shopdetail.html?branduid=3554385&xcode=002&mcode=008&scode=001&type=Y&sort=regdate&cur_code=002008&GfDT=bmx1W14%3D",
        "https://starship-square.com/shop/shopdetail.html?branduid=3554384&xcode=002&mcode=008&scode=001&type=Y&sort=regdate&cur_code=002008&GfDT=bm90W18%3D",
        "https://starship-square.com/shop/shopdetail.html?branduid=3554354&xcode=002&mcode=008&scode=002&type=Y&sort=regdate&cur_code=002008&GfDT=Zm13VA%3D%3D",
        "https://starship-square.com/shop/shopdetail.html?branduid=3554353&xcode=002&mcode=008&scode=002&type=Y&sort=regdate&cur_code=002008&GfDT=bmx0W1o%3D",
        "https://starship-square.com/shop/shopdetail.html?branduid=3554315&xcode=002&mcode=008&scode=001&type=Y&sort=regdate&cur_code=002008&GfDT=Z2p3Vg%3D%3D",
        "https://starship-square.com/shop/shopdetail.html?branduid=3554314&xcode=002&mcode=008&scode=001&type=Y&sort=regdate&cur_code=002008&GfDT=bmt1W1Q%3D",
        "https://starship-square.com/shop/shopdetail.html?branduid=3554395&xcode=002&mcode=008&scode=001&type=Y&sort=regdate&cur_code=002008&GfDT=bm57W11D",
        "https://starship-square.com/shop/shopdetail.html?branduid=3554359&xcode=002&mcode=008&scode=002&type=Y&sort=regdate&cur_code=002008&GfDT=Zml3UFQ%3D"
    ]
    return (
        <>
            <li className="goods-card">
                <img src={imgUrl[goodsNum]} alt="구매하러 가기" className="goods-image" />
                <a href={siteUrl[goodsNum]} target="_blank">
                    <div className="goods-container">
                        <div className="goods-info1">
                            {goodsType[goodsNum] === "NEW" && <div className="goods-type-new">{goodsType[goodsNum]}</div>}
                            {goodsType[goodsNum] === "HOT" && <div className="goods-type-hot">{goodsType[goodsNum]}</div>}
                            {goodsType[goodsNum] === "SOLD OUT" && <div className="goods-type-sold">{goodsType[goodsNum]}</div>}
                            {goodsType[goodsNum] === " " && <div className="goods-type-none">{goodsType[goodsNum]}</div>}
                            {goodsType[goodsNum] === "BEST" && <div className="goods-type-best">{goodsType[goodsNum]}</div>}
                            <div className="goods-title">{goodsName[goodsNum]}</div>
                        </div>
                        <div className="goods-price">{goodsPrice[goodsNum]}</div>
                    </div>
                </a>
            </li>
        </>
    );
};

export default Goods;