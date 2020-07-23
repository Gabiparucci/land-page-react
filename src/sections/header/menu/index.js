import React from 'react';
import './styles.css'
import Logo from '../../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default () => {
    return (
        <div className="menu">
            <img className="logo" src={Logo} />
            <div className="topics">
                <ul className="list-topics">
                    <li>
                        <AnchorLink href='#home'>Início</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#about'>Sobre nós</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#portfolio'>Potfólio</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#services'>Serviços</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#prices'>Preços</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#contact'>Contato</AnchorLink>
                    </li>
                    <li>
                        <a href="https://github.com/Gabiparucci/land-page-react" target="_blank">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}