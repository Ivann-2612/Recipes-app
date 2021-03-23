import React from 'react'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {BsBootstrap} from 'react-icons/bs'
import {GrApple} from 'react-icons/gr'
import { Link } from 'react-router-dom';



const WelcomePage = () => {
    return (
        <div className='welcome-page'>
             <div className='links'>
                <Link className='link1' to="/">Blogs</Link>
                <Link className='link2'  to='/portfolio'>Portfolio</Link>
             </div>
            <h3>This is my personal blog website.</h3>
            <h4>I am a fun of <GrApple className='apple' size="30px" color='orange' />&nbsp; products .</h4>
            <p>Blog about some useful tips from HTML, CSS, JAVASCRIPT AND REACT.</p>
           <div className='welcome-allSvg'>
           <SiHtml5 size="30px" color='orange' />
            <SiCss3 size="30px" color='orange' />
            <SiJavascript size="30px" color='orange' />
            <SiReact size="30px" color='orange' />
            <SiGithub size="30px" color='orange' />
            <SiTailwindcss size="30px" color='orange' />
            <BsBootstrap size="30px" color='orange' />
           </div>
           <p className='copyright'>Ivan Nikolic &copy;<span style={{color:'orange'}}> 2021</span></p>
        </div>
    )
}

export default WelcomePage
