import React from 'react';
import Card from '../../elements/card';
import './news.styles.css';

const NewsSection = () => {
    return (
        <section className={'news-section'}>
            <Card>
                <div>
                    <div>slider</div>
                    <div>tabs</div>
                </div>
                <div>pod cast</div>
            </Card>
        </section>
    );
};

export default NewsSection;
