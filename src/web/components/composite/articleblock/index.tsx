import React from 'react';
import './articleblock.style.css';
import CollectionCard from '../../molecules/collectioncard';

const ArticleBlock = () => {
    return (
        <section className={'article-section'}>
            {Array(4)
                .fill(null)
                .map(() => (
                    <CollectionCard />
                ))}
        </section>
    );
};

export default ArticleBlock;
