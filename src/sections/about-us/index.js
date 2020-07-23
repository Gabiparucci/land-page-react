import React from 'react';
import './styles.css'
import { FaRegLightbulb, FaSun, FaRocketchat } from "react-icons/fa"
import SectionTitle from '../../components/section-title'
import Card from '../../components/card'

export default () => {
    const cards = [
        {
            icon: <FaRegLightbulb />,
            title: "Create Idea",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        },
        {
            icon: <FaSun />,
            title: "Smart Solutions",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        },
        {
            icon: <FaRocketchat />,
            title: "Free Support",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        }
    ]

    return (
        <section className="about-us" id="about">
            <div className="about-content">
                <SectionTitle title="SOBRE NÓS" objective1="Nosso objetivo é"  objective2="facilitar sua vida" />
                <div className="about-topics">
                    {cards.map((card, i) => (
                        <Card card={card} key={i}/>
                    ))}
                </div>
            </div>
        </section>
    )
}