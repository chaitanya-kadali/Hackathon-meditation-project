import React from "react";
import './About.css';
const About=()=>{
    const tohome=()=>{
       window.location.href='/';
    }
    return(
        <div className="about">
        <div className='header'>
        <p id='header-medi'onClick={tohome}>Meditation Timer</p>
      </div>
    <ul id="text-text">
    We can use the website by  proper understanding and by the extra features available compared to several websites.
    Here are some extra features available included:
    <li>Producing information about how to meditate.</li>
    <li>Giving auto suggestions of session durations.</li>
    <li>Providing original and certified  research information  about meditation.</li></ul>
    <center><p class="thankyou">Thank you !</p></center>
    </div>
    )
}
export default About;