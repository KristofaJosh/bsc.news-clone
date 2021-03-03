import React from 'react';
// @ts-ignore
import Slider from 'infinite-react-carousel';
import './carousel.styles.css'

const images = [
    {
        src:
            'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d959ec80c0d81310635c1_venus%20tutorial.jpg',
        info: {},
    },
    { src: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/5fd2eb87121e8752bb9fa85a_gfg.jpg', info: {} },
    {
        src: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603bbfc750bab99cbb3f19aa_stableawap.jpg',
        info: {},
    },
    {
        src:
            'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603a6ffd677543c746b97599_hyperjump-p-800.jpeg',
        info: {},
    },
    {
        src: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/60384f6661ea98dedfc83cef_breaking%20news.jpg',
        info: {},
    },
];

const Carousel = () => {
    return (
        <div className={'carousel'}>
            <Slider dots rows={1}  adaptiveHeight={true}>
                {images.map((el, i) => (
                    <div key={i} className={'carousel__content'}>
                        <img src={el.src} alt="" />
                        <div>info</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
