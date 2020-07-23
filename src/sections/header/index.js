import React from 'react';
import './styles.css'
import Menu from './menu'
import Welcome from './welcome'

export default () => {
    return (
        <section className="header" id="home">
            <div className="header-content">
                <Menu />
                <Welcome />
            </div>
        </section>
    )
}