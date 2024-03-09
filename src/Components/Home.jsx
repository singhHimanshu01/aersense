import React from 'react'
import vide from "../images/vide.mp4"
import s from "../images/s.png";
import l from "../images/l.png";
import i from "../images/i.png";
import x from "../images/x.png";
import vid from "../images/vid.png";
const Home = () => {
  return (
        <div className="home">
        <video className="home_backgroundVideo" 
                src={vide} 
                muted 
                loop 
                playsInline 
                autoPlay       
        ></video>
        <div className='headFilm'>
        <h3>Watch the film</h3>
        <img src={vid} alt="" />
        </div>
        <div className='vidcont'>
            <h1 style={{color:"white",fontSize:"55px"}}>aersense</h1>
            <h3 style={{color:"white",fontSize:"22px",marginTop:"11px"}}>Starting at $999</h3>
            <br /><div>Order by March 31st to receive the first 3</div>
            <div>months of the Humane Subscription for free.*</div>
            <br /> <br /> <br />
            <div className="btn">
            <button className='homebtn' id='lernbtn'>Learn more </button>
            <button className='homebtn' id='lernbtn' style={{backgroundColor:"rgb(0, 255, 224)",color:"black",border:"none"}}>Order </button>
            </div>
        </div> <br />
        <div className='cont'>
            <div className='cont2'>
                <p>The price for the Ai Pin Complete System starts at $699. Taxes and fees not included. Ai Pin requires an active subscription. $24/month, taxes and fees not included, subscription automatically renews until cancelled. For more information, review https://humane.com/subscription. Ai Pin Complete System includes Ai Pin, Charge Case, Charge Pad, USB-C Adapter, Cable, and two Battery Boosters. Applies to Humane Core Plan only. Premium Add-Ons and additional services not included.</p>
            </div>
            <div className="cont3">
            <h1>Stay connected and informed</h1>
            <h1>about the latest from Humane.</h1>
            </div>
            <button>Sign up for updates</button>
            <div className='cont4'>
                <div className="cont41">
                <div>support</div>
                <div>join us</div>
                <div>media kit</div>
                <div>subscription</div>
                <div>warranty</div>
                <div>return policy</div>
                <div>privacy policy</div>
                <div>terms of service</div>
                </div>
                <div className="cont42">
                    <img src={x} alt="" />
                    <img src={l} alt="" />
                    <img src={i} alt="" />
                    <img src={s} alt="" />
                    <div className='footer1'>© Humane Inc. 2024 All rights reserved.</div>
                </div>
                <div className='footer'>
                    <p>© Humane Inc. 2024 All rights reserved.</p>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Home