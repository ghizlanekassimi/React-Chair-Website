import React from 'react'
import './Reason.css'
import image1 from '../../assets/rimg1_.jpg'
import image2 from '../../assets/rimg2.jpg'
import image3 from '../../assets/rimg3.jpg'
import image4 from '../../assets/rimg5.jpg'
import ticket from '../../assets/ticket.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import {motion} from 'framer-motion'


function Reason() {
  const transition ={type:"spring", duration:2}
  return (
  <div className="Reasons" id="reasons">
    <div className="left-r">
      <img src={image1} alt=""/>
      <img src={image4} alt=""/>
      <img src={image2} alt=""/>
      <img src={image3} alt=""/>

    </div>
    <div className="right-r">
      <span>Some reasons</span>
      <div>
        <span className='stroke-text'>why </span>
        <span>Choose us ?</span>
      </div>
      <motion.div className='details-r'
        
      initial={{opacity:0 ,x:100}}
      whileInView={{opacity:1,x:0}}  
      transition={transition}>
      <div>
        <img src={ticket} alt=""></img>
      <span>We made everything with care </span>
      </div>
      <div>
        <img src={ticket} alt="" />
        <span>We have more than 200 expert makers</span>
        </div>
      <div>
        <img src={ticket} alt="" />
        <span>We are around The world</span>
        </div>
      <div>
        <img src={ticket} alt="" />
        <span>We can personalise your chair</span>
        </div>
    </motion.div>
      <span style={{color : 'var(--gray)', fontWeight:'bold'}}>
        Our partners
      </span>
      <div className="partners">
        <img src={nb} alt="" />
        <img src={adidas} alt="" />
        <img src={nike} alt="" />
        </div>
    </div>
  </div>
  )
}

export default Reason