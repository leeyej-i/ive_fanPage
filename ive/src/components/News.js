import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class News extends React.Component {
    render() {
        const settings = {
            infinite: true,
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div id="news" className="news-container">
                <h1 className='subtitle'>NEWS</h1>
                <Slider {...settings}>
                    <div className='news1'>
                        <h1 className='news-title1'>싱글 2집 <br /> LOVE DIVE 발매</h1>
                        <h2 className='news-subtitle'><a href='https://www.youtube.com/watch?v=Y8JFxS1HlDo'>뮤비 보러가기-&gt;</a></h2>
                    </div>
                    <div className='news2'>
                        <h1 className='news-title2'>THE SHOW <br />LOVE DIVE 첫 1위</h1>
                        <h2 className='news-subtitle'><a href='https://www.youtube.com/watch?v=OreKZLownjM'>무대 보러가기-&gt;</a></h2>
                    </div>
                    <div className='news3'>
                        <h1 className='news-title3'>아이브 신인상 수상</h1>
                        <h2 className='news-subtitle'><a href='https://www.youtube.com/watch?v=M09vSJAt61E&feature=youtu.be'>시상식 보러가기-&gt;</a></h2>
                    </div>
                </Slider>
            </div>
        );
    }
}

