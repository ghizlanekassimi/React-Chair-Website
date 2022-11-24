import React from 'react'
import './Join.css'
function Join() {
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr/>
        <div>
          <span className='stroke-text'>Try our </span>
          <span>product NOW</span>
        </div>
        <div>
          <span>Connect</span>
          <span className='stroke-text'>  With us!</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email_container">
          <input type="email" name="user-email" placeholder='Enter your email'/>
          <button className="btn btn-j">Connect</button>
        </form>
      </div>
    </div>
  )
}

export default Join