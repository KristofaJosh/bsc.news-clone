export type postcardInterface = {
    type: 'asImageLink' | 'asDescribe';
    imagePath?: string;
    titleLink?: { title: string; route: string };
    description?: string;
    button?: { text: string; link: string; type: string };
    date?: string;
    author?: { name: string; route: string };
};
