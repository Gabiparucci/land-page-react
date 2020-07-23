import React from 'react';
import './styles.css'
import { FaQuoteLeft } from "react-icons/fa"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default () => {
    const comments = [
        {
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            author: "Nabil Dirar",
            website: "envato.com"
        },
        {
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            author: "Hodir Giral",
            website: "envato.com"
        },
        {
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            author: "Navar Shablesk",
            website: "envato.com"
        }
    ]
    return (
        <section className="comments" id="comment">
            <div className="comments-content">
                <div className="comment-icon">
                    <FaQuoteLeft />
                </div>
                <AwesomeSlider
                    bullets={true}
                    infinite={true}
                    mobileTouch={true}
                    className="slides-wrapper"
                    buttons={false}>
                    {comments.map((comment, i) => (
                        <div className="comment">
                            <p>{comment.comment}</p>
                            <h5>{comment.author}</h5>
                            <span>{comment.website}</span>
                        </div>
                    ))}
                </AwesomeSlider>
            </div>
        </section>
    )
}