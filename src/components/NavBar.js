import React from 'react'
import '../css/navbar.css';
import Button from './Button'

function NavBar() {
    return (
        <>
            <header>
                <div id='logo'>
                    <img src="./images/brand.png" alt="milkybar" />
                </div>
                <nav id='menu'>
                    <ul>
                        <li className="menu-item"><Button image='./images/treasure-chest.png' /></li>
                        <li className="menu-item" ><Button image='./images/home.png' /></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavBar
