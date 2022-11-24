import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import landingimg from '../../assets/landingimg.png'
import stopauxinfox from '../../assets/get_inf.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
const Hero = () => {
  const transition = {type :'spring',duration :3}
const mobile = window.innerWidth <= 768 ? true:false;

  return (
    <div className="hero" id='home'>
      <div className="blur blur-h"></div>
        <div className="left-h">
          <Header/>
          {/* the best add */}
          <div className="the-best-ad">
          <motion.div initial={{left:mobile? '167px':'238px'}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}>

          </motion.div>
          <span>The best chairClub in the world </span>
          </div>
          {/* Hero Heading */}

<div className="hero-text">
  <div><span className='stroke-text'>Setup </span><span>Your</span></div>
  <div><span>Workstation</span></div>
  <div className="span">
  <span>Set up your home workstation to prevent discomfort</span>
  </div>
</div>
{/* Figures */}
<div className="figures">
  <div><span><NumberCounter end={140} start={100} delay="4" preFix="+"/></span><span>expert makers</span></div>
  <div><span><NumberCounter end={200} start={160} delay="4" preFix="+"/></span><span>Daily Sales</span></div>
  <div><span><NumberCounter end={400} start={360} delay="4" preFix="+"/></span><span>new dailyclients</span></div>
</div>
{/* Hero buttons */}
<div className="hero-button">
  <button className="btn">Get Started</button>
  <button className="btn">Learn More</button>
</div>
        </div>
        <div className="right-h"> 
        <button className="btn">Join Now</button>
        <img src={landingimg} alt="" className='hero-image'/>
        <motion.div className="info"
        initial={{right:"32rem"}}
        whileInView={{right:"28rem"}}
        transition={transition}
        >
<img src={stopauxinfox} alt="" />
<div>
<span>You are in </span>
<span>The right place</span>
</div>
        </motion.div>
        </div>
    </div>
  )
}

export default Hero