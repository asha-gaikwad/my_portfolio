import React, { useRef } from 'react'
import navCss from '../Nav/Nav.module.css'

function Nav() {

// Dark Ligh Mode //

const DarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'Dark')
}
const LightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'Light')

}

DarkMode();

const ThemeHandler = () =>{
    if(document.querySelector('body').getAttribute('data-theme') === 'Dark'){
        LightMode()
    }
    else{
        DarkMode()
    }
}


const Menu = useRef();

const manuHandler = () => {
    Menu.current.classList.toggle(navCss.activeNav)
}

  return (
    <>
    <div className={navCss.Nav}>
        <div className={navCss.logo}>
            {/* <a href="#">Asha</a> */}
            <a href="#">Nancy</a>
        </div>
        <ul ref={Menu}>
        <li><a href="#">  <i className="ri-home-3-line"></i> Home</a></li>
            <li><a href="#"><i className="ri-user-line"></i>About</a></li>
            <li><a href="#"><i className="ri-instance-line"></i>Services</a></li>
            <li><a href="#"><i className="ri-id-card-line"></i>Portfolio</a></li>
            <li><a href="#"><i className="ri-group-line"></i>Testimonial</a></li>
            <li><a href="#"><i className="ri-news-line"></i>Blogs</a></li>
            <li><a href="#"><i className="ri-phone-line"></i>Contact</a></li>
        </ul>
        <div className={navCss.NavBtns}>
            <i className="ri-moon-line" onClick={ThemeHandler}></i>
            <i className="ri-menu-4-line" onClick={manuHandler}></i>
        </div>
    </div>
    </>
  )
}

export default Nav
