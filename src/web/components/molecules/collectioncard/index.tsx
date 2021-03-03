import React from 'react';
import Card from '../../elements/card';
import { FaFolderOpen } from 'react-icons/all';
import './collectioncard.style.css'

const CollectionCard = () => {
    return (
        <Card className={'collection-card__card card--no-padding'}>
            <div className="multi-images">
                {Array(4)
                    .fill(
                        'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/601c2778bc0ebe6f98736e15_new122-20.jpg'
                    )
                    .map((el) => (
                        <a href="/">
                            <img src={el} alt="" />
                        </a>
                    ))}
            </div>
            <div className="description">
                <p>Title</p>
                <p className={'text-truncate_3'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid animi asperiores commodi
                    consequuntur culpa cupiditate, debitis, deserunt dolorum eaque eius et exercitationem explicabo
                    harum, minima non perferendis ratione rerum.
                </p>
            </div>
            <div className="type-button">
                <p>Collection</p>
                <button>
                    <FaFolderOpen />
                    10+ Pieces
                </button>
            </div>
        </Card>
    );
};

export default CollectionCard;
