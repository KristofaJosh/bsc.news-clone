import React, { useState } from 'react';
import './tabcard.style.css';

const hotLinks = [
    { title: 'BSC NEWS will hold an AMA with Certik 23rd Feb 3pm GMT', link: '/' },
    { title: 'BSC NEWS will hold an AMA with Certik 23rd Feb 3pm GMT', link: '/' },
    { title: 'BSC NEWS will hold an AMA with Certik 23rd Feb 3pm GMT', link: '/' },
    { title: 'BSC NEWS will hold an AMA with Certik 23rd Feb 3pm GMT', link: '/' },
    { title: 'BSC NEWS will hold an AMA with Certik 23rd Feb 3pm GMT', link: '/' },
    { title: 'BSC NEWS will hold an AMA with Certik 23rd Feb 3pm GMT', link: '/' },
];

const editorsLinks = [
    { title: 'Binance Smart Chain Tutorial: Supplying and Borrowing Assets from Venus Protocol', link: '/' },
    { title: 'Binance Smart Chain Tutorial: Supplying and Borrowing Assets from Venus Protocol', link: '/' },
    { title: 'Binance Smart Chain Tutorial: Supplying and Borrowing Assets from Venus Protocol', link: '/' },
    { title: 'Binance Smart Chain Tutorial: Supplying and Borrowing Assets from Venus Protocol', link: '/' },
    { title: 'Binance Smart Chain Tutorial: Supplying and Borrowing Assets from Venus Protocol', link: '/' },
    { title: 'Binance Smart Chain Tutorial: Supplying and Borrowing Assets from Venus Protocol', link: '/' },
];

const previewLinks = (view: string) => {
    return view === 'hot' ? hotLinks : editorsLinks;
};

const TabCard = () => {
    const [showing, setShowing] = useState('editors');

    return (
        <div className={'tab-card'}>
            <div className={'tab-card__tabs'}>
                <div
                    onClick={() => setShowing('editors')}
                    className={`tab-card__tabs-tab ${showing === 'editors' ? 'is-active' : ''}`}>
                    <p>editors choice</p>
                </div>
                <div
                    onClick={() => setShowing('hot')}
                    className={`tab-card__tabs-tab ${showing === 'hot' ? 'is-active' : ''}`}>
                    <p>hot stories</p>
                </div>
            </div>
            <div>
                {previewLinks(showing).map(({ link, title }) => (
                    <div className={'tab-content'}>
                        <a href={link}>{title}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabCard;
