export type Articles_Type = {
    type: 'asImageLink' | 'asDescribe';
    titleLink: { title: string; route: string };
    button: { text: string; link: string; type: string };
    author: { name: string; route: string };
    description?: string;
    image: { src: string; route: string };
    date: any;
};
