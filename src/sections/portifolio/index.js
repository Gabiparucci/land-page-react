import React, { useState } from 'react';
import './styles.css'
import SectionTitle from '../../components/section-title'

const buttons = [
    {
        label: "Mostrar todos",
        images: [
            "https://digitalland.com.br/wp-content//uploads/2019/05/287322-arquitetura-de-marca-entenda-esse-conceito-na-gestao-de-branding.jpg",
            "https://www.contabeis.com.br/assets/img/news/14fab04dffe237e83443a4dce26fbd17.jpg",
            "https://blog.hotmart.com/blog/2017/11/BLOG_landingpage.png",
            "https://www.webpixel.com.br/wp-content/uploads/2018/10/landing-page-brasilia-df.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/404/0e046590471557.Y3JvcCwzNDAwLDI2NTksMCwxMjY.jpg",
            "https://i.pinimg.com/originals/68/e2/4d/68e24d9d478db7396f47730ae0a215ee.jpg"

        ]
    },
    {
        label: "Branding",
        images: [
            "https://digitalland.com.br/wp-content//uploads/2019/05/287322-arquitetura-de-marca-entenda-esse-conceito-na-gestao-de-branding.jpg",
            "https://www.contabeis.com.br/assets/img/news/14fab04dffe237e83443a4dce26fbd17.jpg"
        ]
    },
    {
        label: "Landing page",
        images: [
            "https://blog.hotmart.com/blog/2017/11/BLOG_landingpage.png",
            "https://www.webpixel.com.br/wp-content/uploads/2018/10/landing-page-brasilia-df.jpg"
        ]
    },
    {
        label: "Design 3D",
        images: [
            "https://mir-s3-cdn-cf.behance.net/projects/404/0e046590471557.Y3JvcCwzNDAwLDI2NTksMCwxMjY.jpg",
            "https://i.pinimg.com/originals/68/e2/4d/68e24d9d478db7396f47730ae0a215ee.jpg"
        ]
    },
]

export default () => {
    const [btnSelected, setBtnSelected] = useState(buttons[0])
    
    return (
        <section className="portfolio" id="portfolio">
            <div className="portfolio-content">
                <SectionTitle title="PORTFOLIO" objective1="Veja nossa incrível" objective2="coleção de portfólios" />
                <div className="portfolio-btns">
                    {buttons.map((button, i) =>(
                        <button 
                            key={i}
                            className={button.label == btnSelected.label ? "active" : ""}
                            onClick={() => setBtnSelected(button)}>{button.label}</button>
                    ))}
                </div>
                <div className="portfolio-imgs">
                        {btnSelected.images.map((img, i) =>(
                            <div key={i} style={{
                                backgroundImage: `url(${img})`
                            }}/>
                        ))}
                </div>
            </div>
        </section>
    )
}