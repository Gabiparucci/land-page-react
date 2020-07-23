import React from 'react';
import './styles.css'

export default ({ card, bottom }) => {
    return (
        <div className="card" style={{marginBottom: bottom ? bottom : 0}}>
            {card.icon}
            <label>{card.title}</label>
            <p>{card.description}</p>
        </div>
    )
}