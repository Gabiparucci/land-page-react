import React from 'react';
import './styles.css'

export default ({ title, objective1, objective2 }) => {
    return (
        <div className="section-title">
            <label className="label-about-us">{title}</label>
            <label className="objective-1">{objective1}</label>
            <label className="objective-2">{objective2}</label>
        </div>
    )
}