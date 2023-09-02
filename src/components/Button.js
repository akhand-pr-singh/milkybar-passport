import React from 'react'
import '../css/button.css';

function Button({ image }) {
    return (
        <>
            <div className="container buttons">
                <a href="#"><img src={image} alt="milkybar" /></a>
            </div>
        </>
    )
}

export default Button
