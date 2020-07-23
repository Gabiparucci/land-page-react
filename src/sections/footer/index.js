import React from 'react';
import './styles.css'
import Logo from '../../assets/logo2.png'
import { FaAngleDoubleRight, FaInstagram, FaTwitter, FaFacebookF  } from "react-icons/fa";

export default () => {
    const quick = [
        {
            value: "Sobre nós"
        },
        {
            value: "Contato"
        },
        {
            value: "Portfólio"
        }
    ]
    const support = [
        {
            value: "support@example.com"
        },
        {
            value: "+ 61 3 8376 6284"
        },
        {
            value: "Serviços"
        }
    ]

    const social = [
        {
            icon: <FaFacebookF />,
            value: "Facebook"
        },
        {
            icon: <FaTwitter />,
            value: "Twitter"
        },
        {
            icon: <FaInstagram />,
            value: "Instagram"
        }
    ]
    return (
        <section className="footer">
            <div className="footer-content">
                <div className="logo-wrapper">
                    <img src={Logo} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
                <div className="footer-options">
                    <div className="quick">
                        <label>Acesso rápido</label>
                        <ul>
                            {quick.map((q) => (
                                <li>
                                    <FaAngleDoubleRight /> {q.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="support">
                        <label>Suporte</label>
                        <ul>
                            {support.map((s) => (
                                <li>
                                    <FaAngleDoubleRight /> {s.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="social">
                        <label>Social</label>
                        <ul>
                            {social.map((s) => (
                                <li>
                                    {s.icon} {s.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}