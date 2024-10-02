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

const Navbar = useRef();

window.addEventListener('scroll', function(){
    if (window.scrollY > 150){
        Navbar.current.classList.add(navCss.navbarScroll)
    }
    else{
        Navbar.current.classList.remove(navCss.navbarScroll)
    }
})

  return (
    <>
    <div className={navCss.Nav} ref={Navbar}>
        <div className={navCss.logo}>
            <a href="#">Asha</a>
            {/* <a href="#home">Nancy</a> */}
        </div>
        <ul ref={Menu}>
        <li><a href="#home">  <i className="ri-home-3-line"></i> Home</a></li>
            <li><a href="#about"><i className="ri-user-line"></i>About</a></li>
            <li><a href="#services"><i className="ri-instance-line"></i>Services</a></li>
            <li><a href="#portfolio"><i className="ri-id-card-line"></i>Portfolio</a></li>
            <li><a href="#testimonial"><i className="ri-group-line"></i>Testimonial</a></li>
            {/* <li><a href="#blogs"><i className="ri-news-line"></i>Blogs</a></li> */}
            <li><a href="#contact"><i className="ri-phone-line"></i>Contact</a></li>
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
