import React from 'react';
import './card.styles.css';

const Card: React.FC<{ className?: string }> = ({ children, className }) => {
    return <div className={`card ${className ? className : ''}`}>{children}</div>;
};

export default Card;
