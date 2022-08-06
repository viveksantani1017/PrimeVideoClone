import React from 'react'

function Footer() {
  return (
    <div className="footer-wrapper">
        <div className="img-wrapper">
            <img src="./resources/images/logo.png" alt="logo" style={{width:'100px'}} />
        </div>
        <div className="info-wrapper">
            <a href="" className='info-link'>Terms and Privacy Notice</a>
            <a href=""className='info-link'>Send Us FeedBack</a>
            <a href=""className='info-link'>Help</a>
            <span href="">1996-2002, Amazon.com, Inc. or its affiliates</span>
        </div>
    </div>
  )
}

export default Footer