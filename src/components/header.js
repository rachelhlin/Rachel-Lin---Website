import React from 'react';
import '../App.css'
import "../header.css"

export const Header = () => {
    return (
        <header>
            <h1>Welcome to my website</h1>
            <nav>
                <a href="/#">Home</a>
                <a href="/aboutMe">About Me</a>
            </nav>
        </header>
    )
}