import React from 'react';
import serviceCss from '../Service/Service.module.css'
import {Tilt} from "react-tilt";

function Service() {

const defaultOptions ={
    max:10,
    speed:0.05,
    scale:1.0,
}
    
  return (
    <>
    <section className={`${serviceCss.ServiceWrapper} section`}>
        <h1>What I Do</h1>
        <p className={serviceCss.pera}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus explicabo saepe facilis consequuntur adipisci consectetur aliquid.</p>
        <div className={serviceCss.ServiceCards}>
            <Tilt option={defaultOptions}>
            <div className={serviceCss.ServiceCard}>
                <i className="ri-database-line"></i>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum debitis quia atque ipsam molestias. Voluptatum, quibusdam similique? In dignissimos error asperiores similique ab unde? Unde repudiandae ab illum commodi facilis.</p>
                <h4>Learn More<i className="ri-arrow-right-line"></i></h4>
            </div>
            </Tilt>
            <Tilt option={defaultOptions}>
            <div className={serviceCss.ServiceCard}>
                <i className="ri-pantone-line"></i>
                <h3>UI / UX Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum debitis quia atque ipsam molestias. Voluptatum, quibusdam similique? In dignissimos error asperiores similique ab unde? Unde repudiandae ab illum commodi facilis.</p>
                <h4>Learn More<i className="ri-arrow-right-line"></i></h4>
            </div>
            </Tilt>
            <Tilt option={defaultOptions}>
            <div className={serviceCss.ServiceCard}>
                <i className="ri-palette-line"></i>
                <h3>Posters</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum debitis quia atque ipsam molestias. Voluptatum, quibusdam similique? In dignissimos error asperiores similique ab unde? Unde repudiandae ab illum commodi facilis.</p>
                <h4>Learn More<i className="ri-arrow-right-line"></i></h4>
            </div>
            </Tilt>
            <Tilt option={defaultOptions}>
            <div className={serviceCss.ServiceCard}>
                <i className="ri-video-line"></i>
                <h3>3D Animation Video</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum debitis quia atque ipsam molestias. Voluptatum, quibusdam similique? In dignissimos error asperiores similique ab unde? Unde repudiandae ab illum commodi facilis.</p>
                <h4>Learn More<i className="ri-arrow-right-line"></i></h4>
            </div>
            </Tilt>
        </div>
    </section>
    </>
  )
}

export default Service