import React from 'react';
import './styles.css'
import SectionTitle from '../../components/section-title'
import Plan from '../../components/plan'

export default () => {
    const plans = [
        {
            name: "Básico",
            price: "$15",
            features: [
                {
                    label: "Responsive",
                    active: true
                },
                {
                    label: "Documentation",
                    active: true
                },
                {
                    label: "Support",
                    active: false
                },
                {
                    label: "Multimedia",
                    active: false
                },
                {
                    label: "Creative",
                    active: false
                },
                {
                    label: "Modern",
                    active: false
                },
                {
                    label: "Free Update",
                    active: false
                }
            ]
        },
        {
            name: "Normal",
            price: "$30",
            active: true,
            features: [
                {
                    label: "Responsive",
                    active: true
                },
                {
                    label: "Documentation",
                    active: true
                },
                {
                    label: "Support",
                    active: true
                },
                {
                    label: "Multimedia",
                    active: true
                },
                {
                    label: "Creative",
                    active: false
                },
                {
                    label: "Modern",
                    active: false
                },
                {
                    label: "Free Update",
                    active: false
                }
            ]
        },
        {
            name: "Avançado",
            price: "$50",
            features: [
                {
                    label: "Responsive",
                    active: true
                },
                {
                    label: "Documentation",
                    active: true
                },
                {
                    label: "Support",
                    active: true
                },
                {
                    label: "Multimedia",
                    active: true
                },
                {
                    label: "Creative",
                    active: true
                },
                {
                    label: "Modern",
                    active: true
                },
                {
                    label: "Free Update",
                    active: true
                }
            ]
        }
    ]
    return (
        <section className="prices" id="prices">
            <div className="prices-content">
                <SectionTitle title="PREÇOS" objective1="Valores que cabem no bolso" />
                <div className="plans">
                    {plans.map((plan, i) =>(
                        <Plan plan={plan} key={i}/>
                    ))}
                </div>
            </div>
        </section>
    )
}