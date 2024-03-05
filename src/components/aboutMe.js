import React from 'react'
import '../'
import myImage from './13471.JPG'
export const AboutMe = () => {
    return (
        <div ClassName = 'container'>
            <h1>About Me</h1>
                <div className="left"></div>
                <div className="center">
                    <img src={myImage} alt="Description of the image" style={{ width: '200px', height: '300px' }}/>
                    <p className = "paragraph">My name is Rachel Lin, and I am currently a 3rd year Cognitive Science major at UC Davis! </p>
                </div>
                <div className="right"></div>
            </div>
    )
}