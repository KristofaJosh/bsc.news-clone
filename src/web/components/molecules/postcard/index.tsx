import React from 'react';
import Card from '../../elements/card';
import './postcard.style.css';
import { colorCode } from '../../../../helpers/indicators';
import { postcardInterface } from '../../../../interfaces/postcardInterface';

const PostCard: React.FC<postcardInterface> = ({ type, button, titleLink, date, author, imagePath }) => {
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
                            className="button-tag"
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
export const PostCardSnippet: React.FC<postcardInterface> = ({
    description,
    button,
    titleLink,
    date,
    author,
    imagePath,
}) => {
    return (
        <Card className={'post-card-mobile card--no-padding'}>
            <a href="/">
                <img className="image" src={imagePath} alt="" />
            </a>
            <div className="description">
                <a className="title" href={titleLink?.route}>
                    {titleLink?.title}
                </a>
                <div className={'author-date'}>
                    <span>
                        <a
                            href={button?.link}
                            className="button-tag"
                            style={{ background: colorCode(button?.type), width: 'fit-content', color: 'white' }}>
                            {button?.text}
                        </a>
                    </span>
                    <span>{date}</span>
                    <span>
                        <a href={author?.route}>{author?.name}</a>
                    </span>
                </div>
                <p className="summary text-truncate_2">{description}</p>
            </div>
        </Card>
    );
};

export default PostCard;
