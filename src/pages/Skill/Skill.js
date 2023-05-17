import React from 'react'
import HTML_logo from '../../Assets/Svg/HTML5.svg'
import css from '../../Assets/Svg/CSS3.svg'
import react from '../../Assets/Svg/React.svg'
import bootstrap from '../../Assets/Svg/Bootstrap.svg'
import javascript from '../../Assets/Svg/javascript.svg'
import fontawesome from '../../Assets/Svg/Fontawesome.svg'
import tailwindcss from '../../Assets/Svg/Tailwindcss.svg'
import git from '../../Assets/Svg/Git.svg'
import npm from '../../Assets/Svg/Npm.svg'
import node from '../../Assets/Svg/node-js.svg'
import mongodb from '../../Assets/Svg/Mongodb.svg'
import sql from '../../Assets/Svg/Mysql.svg'
import postman from '../../Assets/Svg/Postman.svg'
import express from '../../Assets/Svg/Express.svg'
import netlify from '../../Assets/Svg/Netlify.svg'
import render from '../../Assets/Svg/Render.svg'
import github from '../../Assets/Svg/Github.svg'
import regex from '../../Assets/Svg/regex.svg'
import vercel from '../../Assets/Svg/triangle-fill.svg'

function Skill() {
    return (
        <div> <div>
            <h1 className='learn'>What I learn ? </h1><br />
            <h2>Front-End</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'>
                        <img src={HTML_logo} alt='HTML 5 LOGO' className='logo' /><br /><h6>HTML 5</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={css} alt='CSS 3 LOGO' className='logo' /><br /><h6>CSS 3</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={javascript} alt='JAVASCRIPT LOGO' className='logo' /><br /><h6>JAVASCRIPT</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={react} alt='REACT LOGO' className='logo' /><br /><h6>REACT</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={bootstrap} alt='BOOTSTRAP LOGO' className='logo' /><br /><h6>BOOTSTRAP</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={fontawesome} alt='fontawesome LOGO' className='logo' /><br /><h6>FONT AWESOME</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={git} alt='git LOGO' className='logo' /><br /><h6>GIT</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={tailwindcss} alt='tailwindcss LOGO' className='logo' /><br /><h6>TAILWIND-CSS</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={npm} alt='npm LOGO' className='logo' /><br /><h6>NPM</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={netlify} alt='netlify LOGO' className='logo' /><br /><h6>NETLIFY</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={github} alt='github LOGO' className='logo' /><br /><h6>GITHUB</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={vercel} alt='vercel LOGO' className='logo' /><br /><h6>VERCEL</h6>
                    </div>
                </div>
            </div><br /><br />
            <h2>Back-End</h2><div className='container'>
                <div className='row'>
                    <div className='col-md-2'>
                        <img src={node} alt='node logo' className='logo' /><br /><h6>NODE-JS</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={express} alt='express logo' className='logo' /><br /><h6>EXPRESS-JS</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={mongodb} alt='mongodb logo' className='logo' /><br /><h6>MONGODB</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={sql} alt='sql logo' className='logo' /><br /><h6>SQL</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={postman} alt='postman logo' className='logo' /><br /><h6>POSTMAN</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={render} alt='render LOGO' className='logo' /><br /><h6>RENDER</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={regex} alt='regex LOGO' className='logo' /><br /><h6>REGULAR EXPRESSION</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={github} alt='github LOGO' className='logo' /><br /><h6>GITHUB</h6>
                    </div>
                    <div className='col-md-2'>
                        <img src={npm} alt='npm LOGO' className='logo' /><br /><h6>NPM</h6>
                    </div>

                </div>
            </div>

        </div></div>
    )
}

export default Skill