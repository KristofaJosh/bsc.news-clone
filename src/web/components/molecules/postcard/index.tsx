import React from 'react';
import Card from '../../elements/card';
import './postcard.style.css';
import { colorCode } from '../../../../helpers/indicators';

const PostCard: React.FC<{
    type: 'asImageLink' | 'asDescribe';
    imagePath?: string;
    titleLink?: { title: string; route: string };
    button?: { text: string; link: string; type: string };
    date?: string;
    author?: { name: string; route: string };
}> = ({ type, button, titleLink, date, author, imagePath }) => {

    return (
        <Card className={'post-card card--no-padding'}>
            {type === 'asImageLink' ? (
                <a href="/">
                    <div
                        style={{
                            background: `url(${imagePath}) center no-repeat`,
                            backgroundSize: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </a>
            ) : type === 'asDescribe' ? (
                <div className={'post-card__as-describe'}>
                    <div className="image">
                        <a href="/">
                            <img src={imagePath} alt="" />
                        </a>
                    </div>
                    <div className="description">
                        <a className="title" href={titleLink?.route}>
                            {titleLink?.title}
                        </a>
                        <a
                            href={button?.link}
                            className="button"
                            style={{ background: colorCode(button?.type), width: 'fit-content', color: 'white' }}>
                            {button?.text}
                        </a>
                        <div className="author-date">
                            <span>
                                by <a href={author?.route}>{author?.name}</a>
                            </span>
                            <span>{date}</span>
                        </div>
                    </div>
                </div>
            ) : null}
        </Card>
    );
};

export default PostCard;
