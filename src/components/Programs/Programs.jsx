import React from 'react'
import './Programs.css'
import '../../data/programsData'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* Header */}
      <div className="programs-header">
        <span className='stroke-text'>Explore our</span>
        <span>impressive</span>
        <span className='stroke-text'>Products</span>
      </div>
      <div className="program-categories">
        {programsData.map((program)=>{
          return (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Programs