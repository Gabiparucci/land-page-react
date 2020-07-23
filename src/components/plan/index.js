import React from 'react';
import './styles.css'

export default ({ plan }) => {
    return (
        <div className={`plan ${plan.active ? 'active' : ''}`}>
            <label>{plan.name}</label>
            <h5>{plan.price}</h5>
            <ul>
                {plan.features.map((feature, i) => (
                    <li key={i} className={feature.active ? 'active' : ''}>{feature.label}</li>
                ))}
            </ul>
            <button>Começar</button>
        </div>
    )
}