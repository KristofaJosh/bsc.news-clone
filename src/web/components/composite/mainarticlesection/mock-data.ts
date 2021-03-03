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
        titleLink: { title: 'Smokehouse AMA Transcript', route: '/' },
        button: { text: 'Essentials', link: '/', type: 'essentials' },
        author: { name: 'Kole', route: '/' },
        image: {
            src:
                'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d61df3ed9e656ad9a68aa_SmokeHouse_AMA.png',
            route: '/',
        },
        date,
    },
    {
        type: 'asDescribe',
        titleLink: { title: 'Smokehouse AMA Transcript', route: '/' },
        button: { text: 'Sponsored', link: '/', type: 'sponsored' },
        author: { name: 'Nike', route: '/' },
        image: {
            src:
                'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603e383522a034bedd3bbde1_ubu-p-500.jpeg',
            route: '/',
        },
        date,
    },
    {
        type: 'asDescribe',
        titleLink: { title: 'GET Protocol introduces NFT ticketing; minting 120.000 NFTs on BSC', route: '/' },
        button: { text: 'BSC Defi', link: '/', type: 'defi' },
        author: { name: 'Ariks', route: '/' },
        image: {
            src:
                'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d950a5326d80ec675a6d5_get.jpg',
            route: '/',
        },
        date,
    },
    {
        type: 'asImageLink',
        titleLink: { title: '', route: '/' },
        button: { text: 'text', link: '/', type: '' },
        author: { name: 'France', route: '/' },
        image: {
            src:
                'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/603c39a64e593137c6b9d1bc_10-p-500.png',
            route: '/',
        },
        date,
    },
    {
        type: 'asDescribe',
        titleLink: { title: 'Binance Smart Chain Tutorial: Supplying and Borrowing Assets from Venus Protocol', route: '/' },
        button: { text: 'Sponsored', link: '/', type: 'sponsored' },
        author: { name: 'Broke', route: '/' },
        image: {
            src:
                'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d959ec80c0d81310635c1_venus%20tutorial.jpg',
            route: '/',
        },
        date,
    },
];
