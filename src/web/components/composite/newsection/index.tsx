import React from 'react';
import Card from '../../elements/card';
import './news.styles.css';
import TabCard from '../../molecules/tabcard';
import PodCast from '../../molecules/podcast';
import Carousel from '../../molecules/carousel';

const NewsSection = () => {
    return (
        <section className={'news-section'}>
            <Card className={'news-section__content'}>
                <div className={'news-section__content--section-1'}>
                    <Carousel />
                    <TabCard />
                </div>
                <div className={'news-section__content--section-2'}>
                    <PodCast />
                </div>
            </Card>
        </section>
    );
};

export default NewsSection;
