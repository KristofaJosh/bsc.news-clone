import React from 'react';
// @ts-ignore
import Slider from 'infinite-react-carousel';
import './carousel.styles.css';

const images = [
    {
        src:
            'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d959ec80c0d81310635c1_venus%20tutorial.jpg',
        info: {
            top: 'First Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, praesentium.',
            bottom: 'bottom 1',
        },
    },
    {
        src: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/5fd2eb87121e8752bb9fa85a_gfg.jpg',
        info: {
            top: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, praesentium.',
            bottom: 'bottom 2',
        },
    },
    {
        src: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603bbfc750bab99cbb3f19aa_stableawap.jpg',
        info: {
            top: '3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, praesentium.',
            bottom: 'bottom 3',
        },
    },
    {
        src:
            'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603a6ffd677543c746b97599_hyperjump-p-800.jpeg',
        info: {
            top: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, praesentium.',
            bottom: 'bottom 4',
        },
    },
    {
        src: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/60384f6661ea98dedfc83cef_breaking%20news.jpg',
        info: {
            top: 'Last Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, praesentium .',
            bottom: 'bottom 5',
        },
    },
];

const Carousel = () => {
    return (
        <div className={'carousel'}>
            <Slider dots rows={1} adaptiveHeight={true} autoplay={true}>
                {images.map((el, i) => (
                    <a href="/">
                        <div key={i} className={'carousel__content'}>
                            <img src={el.src} alt="" />
                            <div className={'top-message'}>{el.info.top}</div>
                            <div className={'bottom-message'}>{el.info.bottom}</div>
                        </div>
                    </a>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
