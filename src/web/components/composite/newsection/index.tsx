import React from 'react';
import Card from '../../elements/card';
import './news.styles.css';
import TabCard from '../../molecules/tabcard';

const NewsSection = () => {
    return (
        <section className={'news-section'}>
            <Card className={'news-section__content'}>
                <div className={'news-section__content--section-1'}>
                    <div>slider</div>
                    <TabCard />
                </div >
                <div className={'news-section__content--section-2'}>pod cast</div>
            </Card>
        </section>
    );
};

export default NewsSection;
