import '../styles/about.css';
import ME from '../images/ME.png'
import AB from '../images/AB.png'
import Arka from '../images/Arka.png'
import DB from '../images/DB.png'
import DMT from '../images/DMT.webp'
import GWC from '../images/GWC.png'
import HD from '../images/HD.png'
import HS from '../images/HS.jpeg'
import NSB from '../images/NSB.png'
import UGA from '../images/UGA.png'
import React from 'react';

const About = React.forwardRef((props, ref) => {

  
    return (
        <div className='about' ref={ref}>
        <div class="image-wrapper">
          <div class="image-container">
            <img className = "aboutImg" src={AB} alt="applebees"/>
            <img className = "aboutImg" src={Arka} alt="arka"/>
            <img className = "aboutImg" src={DB} alt="drobots comp"/>
            <img className = "aboutImg" src={DMT} alt="danbury mission tech"/>
            <img className = "aboutImg" src={GWC} alt="girls who code"/>
            <img className = "aboutImg" src={HD} alt="home depot"/>
            <img className = "aboutImg" src={HS} alt="head starter"/>
            <img className = "aboutImg" src={NSB} alt="national society of black engrs"/>
            <img className = "aboutImg" src={UGA} alt="uga"/>

            <img className = "aboutImg" src={AB} alt="applebees"/>
            <img className = "aboutImg" src={Arka} alt="arka"/>
            <img className = "aboutImg" src={DB} alt="drobots comp"/>
            <img className = "aboutImg" src={DMT} alt="danbury mission tech"/>
            <img className = "aboutImg" src={GWC} alt="girls who code"/>
            <img className = "aboutImg" src={HD} alt="home depot"/>
            <img className = "aboutImg" src={HS} alt="head starter"/>
            <img className = "aboutImg" src={NSB} alt="national society of black engrs"/>
            <img className = "aboutImg" src={UGA} alt="uga"/>
          </div>
          </div>
          <div className='aboutWrapper'>
        <h1 className = 'aboutHeader'>All about me</h1>
        <img src = {ME} alt = "me" className="me"/>
        <h5 className = "moreAbout">Hello! I'm Skyler(Sky for short), a passionate up and coming software engineer with a deep interest in leveraging technology to solve complex problems. I am currently pursuing a Bachelor's degree in Computer Science at the University Of Georgia, with a minor in korean language and literature, set to graduate in December 2024.  
          <hr className="aboutHr"/>
          My academic journey has equipped me with a solid foundation in software development, and I have had the opportunity to dive deep into various programming languages and technologies, including Java, C++, Python, and JavaScript. My coursework has included advanced studies in algorithms, data structures, and software engineering principles, preparing me for complex problem-solving and innovative solutions.
          <hr className="aboutHr"/>
          During my co-op at Danbury Mission Technologies, I developed an embedded software program to enhance communication between satellite payload components, honing my skills in both high-level and low-level programming. Additionally, I led the development of an AI Mental Health Chatbot, a scalable web application offering 24/7 multilingual support. Built with Next.js and deployed on AWS EC2, the app utilizes OpenAI GPT-3.5 for intelligent, empathetic responses. As project lead, I managed a team of four using Scrum methodology, focusing on delivering a reliable and impactful mental health solution.
          <hr className="aboutHr"/>
          Outside of my academic and professional life, I have a range of hobbies that keep me engaged and inspired. I love reading, watching foreign films, and learning new languages, which broadens my perspectives and keeps my creativity flowing. Hiking and spending time in nature allow me to recharge and find balance, while swimming and drawing in charcoal are my favorite ways to unwind and express myself artistically.
          <hr className="aboutHr"/>
          I am passionate about combining technology with creativity and am excited to continue exploring how innovative solutions can address real-world challenges.
        </h5>
        </div>
        </div>
    );
  })
  
  export default About;