import { Articles_Type } from '../../../../interfaces/collectionInterface';

let date: any = new Date().toDateString().split(' ');
date.splice(2, 0, ',')
date = date.slice(1).join(' ');

export const ARTICLES: Articles_Type[] = [
    {
        type: 'asDescribe',
        titleLink: { title: 'BSC.Tools Project Insight: Data Analysis Tools on the Binance Smart Chain', route: '/' },
        button: { text: 'Sponsored', link: '/', type: 'sponsored' },
        author: { name: 'Ace', route: '/' },
        image: {
            src:
                'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d97133c7c8028ff0913b8_bsctools.jpg',
            route: '/',
        },
        date,
    },
    {
        type: 'asDescribe',
        titleLink: { title: '', route: '/' },
        button: { text: 'Essentials', link: '/', type: 'essentials' },
        author: { name: '', route: '/' },
        image: {
            src:
                'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d61df3ed9e656ad9a68aa_SmokeHouse_AMA.png',
            route: '/',
        },
        date,
    },
    {
        type: 'asDescribe',
        titleLink: { title: '', route: '/' },
        button: { text: 'Sponsored', link: '/', type: 'sponsored' },
        author: { name: '', route: '/' },
        image: {
            src:
                'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d61df3ed9e656ad9a68aa_SmokeHouse_AMA.png',
            route: '/',
        },
        date,
    },
    {
        type: 'asDescribe',
        titleLink: { title: '', route: '/' },
        button: { text: 'BSC Defi', link: '/', type: 'defi' },
        author: { name: '', route: '/' },
        image: {
            src:
                'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d61df3ed9e656ad9a68aa_SmokeHouse_AMA.png',
            route: '/',
        },
        date,
    },
    {
        type: 'asImageLink',
        titleLink: { title: '', route: '/' },
        button: { text: 'text', link: '/', type: '' },
        author: { name: '', route: '/' },
        image: {
            src:
                'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d61df3ed9e656ad9a68aa_SmokeHouse_AMA.png',
            route: '/',
        },
        date,
    },
    {
        type: 'asDescribe',
        titleLink: { title: '', route: '/' },
        button: { text: 'Sponsored', link: '/', type: 'sponsored' },
        author: { name: '', route: '/' },
        image: {
            src:
                'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d61df3ed9e656ad9a68aa_SmokeHouse_AMA.png',
            route: '/',
        },
        date,
    },
];
