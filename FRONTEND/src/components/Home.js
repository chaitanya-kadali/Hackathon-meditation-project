import React from "react";
// import {BrowserRouter,Routes,Route} from "react-router-dom";
//import { Link } from "react-router-dom";
import './Home.css';
const Home=()=>{
    const toreg=()=>{
          window.location.href='/Registration'
    }
    const tolog=()=>{
        window.location.href='/login'
    }
    const toguest=()=>{
        window.location.href='/Guest'
    }
    
    









return(
           <div className="Home">
            <div className="home-header">
                <p id="home-head-medit">Meditation Timer</p>
                <div className="nav-div">
                   <li onClick={toreg} className="nav-div-li">Registration</li>
                     <li onClick={tolog} className="nav-div-li">Login</li>
                   <li onClick={toguest} className="nav-div-li">Guest Mode</li>
                </div>
            </div>
            <div className="home-navbar"></div>
            <div className="home-meditation">

            
            <p id="home-medit-matter">Meditation holds profound benefits across various aspects of human life.
                 It serves as a potent tool for reducing stress and fostering relaxation, 
                 offering individuals a sanctuary amidst the hustle and bustle of daily life.
                  Through regular practice, meditation enhances focus and cognitive abilities, 
                  sharpening mental acuity and improving productivity. Moreover, it promotes 
                  emotional regulation, equipping practitioners with the resilience to navigate 
                  through turbulent emotions with grace and composure. By calming the mind,
                   meditation facilitates better sleep patterns, aiding in the restoration of
                    energy and vitality. It also offers relief from anxiety, providing a pathway
                     to tranquility and peace of mind. Additionally, meditation has been linked to 
                     pain management, immune system enhancement, and improved brain function.
                      Cultivating self-awareness and compassion, it fosters deeper connections
                       with oneself and others, enriching interpersonal relationships and social
                        harmony. Furthermore, meditation contributes to physical well-being by 
                        reducing blood pressure and mitigating symptoms of depression. 
                        Ultimately, it empowers individuals to lead fulfilling lives with
                         a greater sense of purpose, resilience, and inner peace.</p>
                         </div>
            </div>
    )
}
export default Home