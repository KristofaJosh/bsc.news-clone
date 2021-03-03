import React from 'react';
import { COLLECTIONS, MOBILE_COLLECTIONS } from './mock';
import PostCard, { PostCardSnippet } from '../../molecules/postcard';
import './collection.style.css';
import { MdKeyboardArrowRight } from 'react-icons/all';

const CollectionSection = () => {
    return (
        <div className={'collections-block'}>
            <div className="collections-block__cards">
                {COLLECTIONS.map((el) => (
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
            <div className="collections-block__small-device">
                {MOBILE_COLLECTIONS.map((el) => (
                    <PostCardSnippet
                        type={el.type}
                        titleLink={el.titleLink}
                        imagePath={el.image.src}
                        button={el.button}
                        date={el.date}
                        author={el.author}
                        description={el.description}
                    />
                ))}
            </div>
            <div>
                <button className={'load-more'}>
                    Load More{' '}
                    <span>
                        <MdKeyboardArrowRight size={20} />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CollectionSection;
