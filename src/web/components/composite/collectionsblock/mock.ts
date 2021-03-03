import { Articles_Type } from '../../../../interfaces/collectionInterface';

let date: any = new Date().toDateString().split(' ');
date.splice(3, 0, ',');
date = date.slice(1).join(' ');

export const COLLECTIONS: Articles_Type[] = [
    {
        type: 'asDescribe',
        titleLink: { title: 'UBU Finance: A Perfect Integration Of Advanced DeFi Applications on BSC', route: '/' },
        button: { text: 'BSC Defi', link: '/', type: 'defi' },
        author: { name: 'Briggs', route: '/' },
        image: {
            src:
                'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d61df3ed9e656ad9a68aa_SmokeHouse_AMA.png',
            route: '/',
        },
        date,
    },
    {
        type: 'asImageLink',
        titleLink: { title: 'UBU Finance: A Perfect Integration Of Advanced DeFi Applications on BSC', route: '/' },
        button: { text: 'text', link: '/', type: '' },
        author: { name: 'Chris Josh', route: '/' },
        image: {
            src:
                'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/603041792cc81e64844c9fa9_photo_2021-02-19_22-53-17.jpg',
            route: '/',
        },
        date,
    },
    {
        type: 'asDescribe',
        titleLink: { title: 'UBU Finance: A Perfect Integration Of Advanced DeFi Applications on BSC', route: '/' },
        button: { text: 'Sponsored', link: '/', type: 'sponsored' },
        author: { name: 'Koko', route: '/' },
        image: {
            src:
                'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d61df3ed9e656ad9a68aa_SmokeHouse_AMA.png',
            route: '/',
        },
        date,
    },
];

export const MOBILE_COLLECTIONS: Articles_Type[] = [
    {
        type: 'asDescribe',
        titleLink: { title: 'BSC.Tools Project Insight: Data Analysis Tools on the Binance Smart Chain', route: '/' },
        button: { text: 'Sponsored', link: '/', type: 'sponsored' },
        author: { name: 'Ace', route: '/' },
        image: {
            src: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d97133c7c8028ff0913b8_bsctools.jpg',
            route: '/',
        },
        description:
            'The DxSale ecosystem aims to allow users to create their own utility tokens all through one dAap effortlessly. With features such as the DxLock and DxLaunch, the whole token creation process is accessible to anyone.',
        date,
    },
    {
        type: 'asDescribe',
        titleLink: { title: 'BSC.Tools Project Insight: Data Analysis Tools on the Binance Smart Chain', route: '/' },
        button: { text: 'Sponsored', link: '/', type: 'sponsored' },
        author: { name: 'Pale', route: '/' },
        image: {
            src: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d97133c7c8028ff0913b8_bsctools.jpg',
            route: '/',
        },
        description:
            'The DxSale ecosystem aims to allow users to create their own utility tokens all through one dAap effortlessly. With features such as the DxLock and DxLaunch, the whole token creation process is accessible to anyone.',
        date,
    },
    {
        type: 'asDescribe',
        titleLink: { title: 'BSC.Tools Project Insight: Data Analysis Tools on the Binance Smart Chain', route: '/' },
        button: { text: 'Essentials', link: '/', type: 'essentials' },
        author: { name: 'Coke', route: '/' },
        image: {
            src: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d97133c7c8028ff0913b8_bsctools.jpg',
            route: '/',
        },
        description:
            'The DxSale ecosystem aims to allow users to create their own utility tokens all through one dAap effortlessly. With features such as the DxLock and DxLaunch, the whole token creation process is accessible to anyone.',
        date,
    },
    {
        type: 'asDescribe',
        titleLink: { title: 'BSC.Tools Project Insight: Data Analysis Tools on the Binance Smart Chain', route: '/' },
        button: { text: 'Opinion', link: '/', type: 'opinion' },
        author: { name: 'Bun', route: '/' },
        image: {
            src: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d97133c7c8028ff0913b8_bsctools.jpg',
            route: '/',
        },
        description:
            'The DxSale ecosystem aims to allow users to create their own utility tokens all through one dAap effortlessly. With features such as the DxLock and DxLaunch, the whole token creation process is accessible to anyone.',
        date,
    },
];
