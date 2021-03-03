import React from 'react';
import PostCard from '../../molecules/postcard';
import { ARTICLES } from './mock-data';
import './mainarticlesection.style.css';

const MainArticleSection = () => {
    return (
        <div className={'main-article'}>
                {ARTICLES.map((el) => (
                    <PostCard
                        type={el.type}
                        titleLink={el.titleLink}
                        imagePath={el.image.src}
                        button={el.button}
                        date={el.date}
                        author={el.author}
                    />
                ))}
        </div>
    );
};

export default MainArticleSection;
