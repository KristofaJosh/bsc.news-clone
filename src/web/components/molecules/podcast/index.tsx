import React from 'react';
import './podcast.styles.css';
import Card from '../../elements/card';

const podcastContent = [
    {
        image: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603e9d2bf57cc37812ebd65e_unidex.jpg',
        title: 'Episode 21: A Conversation With Unidex',
        link: '/',
        description:
            'Unidex is a dex aggregator for token swaps, margin trading, options trading, and cross chain swaps preparing to launch on BSC. To learn more about the project visit Unidex.Exchange.',
    },
    {
        image: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603e9d2bf57cc37812ebd65e_unidex.jpg',
        title: 'Episode 20: SushiSwap Coming To BSC?',
        link: '/',
        description:
            'Unidex is a dex aggregator for token swaps, margin trading, options trading, and cross chain swaps preparing to launch on BSC. To learn more about the project visit Unidex.Exchange.',
    },
    {
        image: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603e9d2bf57cc37812ebd65e_unidex.jpg',
        title: 'EP 19: BNB to $200?',
        link: '/',
        description:
            'Unidex is a dex aggregator for token swaps, margin trading, options trading, and cross chain swaps preparing to launch on BSC. To learn more about the project visit Unidex.Exchange.',
    },
];

const PodCast = () => {
    return (
        <>
            <div className={'podcast podcast--desktop'}>
                <h4>PodCast</h4>
                <div className="podcast__contents">
                    {podcastContent.map((el) => (
                        <a href={el.link} className={'podcast__card'}>
                            <img src={el.image} alt="" />
                            <p>{el.title}</p>
                        </a>
                    ))}
                </div>
            </div>
            <div className={'podcast podcast--mobile'}>
                <h4>PodCast</h4>
                <div className="podcast__contents">
                    {podcastContent.map((el) => (
                        <a href={el.link} className={'podcast__card'}>
                            <img src={el.image} alt="" />
                            <div>
                                <p>{el.title}</p>
                                <small className={'text-truncate_3'}>{el.description}</small>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PodCast;
