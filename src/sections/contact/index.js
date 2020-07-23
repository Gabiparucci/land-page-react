import React from 'react';
import './styles.css'

export default () => {
    const infos = [
        {
            type: "Endereço",
            value: "121 King Street, Melbourne Victoria 3000"
        },
        {
            type: "Telefone",
            value: "+ 61 8376 6284"
        },
        {
            type: "Email",
            value: "support@example.com"
        }
    ]
    return (
        <section className="contact" id="contact">
            <div className="contact-content">
                <div className="info-wrapper">
                    {infos.map((info, i) => (
                        <div className="info">
                            <label>{info.type}</label>
                            <span>{info.value}</span>
                        </div>
                    ))}
                </div>
                <div className="form-wrapper">
                    <div className="info-person">
                        <input placeholder="Name" />
                        <input placeholder="Email" />
                    </div>
                    <div className="info-message">
                        <input placeholder="Subject" />
                        <textarea placeholder="Message"></textarea>
                        <div>
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}