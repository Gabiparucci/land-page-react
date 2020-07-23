import React from 'react';
import './styles.css'
import { FaRegLightbulb, FaSun, FaRocketchat } from "react-icons/fa"
import SectionTitle from '../../components/section-title'
import Card from '../../components/card'
import Service3 from '../../assets/bg-service3.png'

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
        },
        {
            icon: <FaRegLightbulb />,
            title: "Create Idea",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        }
    ]
    return (
        <section className="services" id="services">
            <div className="services-content">
                <SectionTitle title="SERVIÇOS" objective1="Veja como" objective2="podemos te ajudar" />
                <div className="services-topics">
                    {cards.map((card, i) => (
                        <Card card={card} bottom={18} key={i}/>
                    ))}
                </div>
                <div className="total">
                <img src={Service3} />
                    <div>
                        <label>540</label>
                        <span>Clientes</span>
                    </div>
                    <div>
                        <label>831</label>
                        <span>Projetos</span>
                    </div>
                    <div>
                        <label>65</label>
                        <span>Marcas feitas</span>
                    </div>
                </div>
            </div>
        </section>
    )
}