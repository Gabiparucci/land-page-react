import React from 'react';
import './styles.css'
import portfolioImage from '../../../assets/portfolio2.jpg'

export default () => {
    return (
        <div className="welcome">
            <div className="welcome-left">
                <div className="welcome-label">
                    <div className="line"></div>
                    <label className="welcome-oya">BEM-VINDO A OYA</label>
                </div>
                <div className="digital-agency">
                    <label>AGÊNCIA</label>
                    <label>DIGITAL</label>
                </div>
                <div className="buttons">
                    <button className="btn-services">Serviços</button>
                    <button className="btn-about-us">Sobre nós</button>
                </div>
            </div>
            <div className="welcome-right">
                <img className="image-header" alt="Header Image" src={portfolioImage} />
            </div>
        </div>
    )
}