import React, { useState } from 'react';
import logo from "../images/logo.png";
import plus from "../images/plus.png";

const ExpandedContainer = () => {
  return (
    <div className="expanded-container">
      <div>ai.pin</div>
      <div>shop</div>
      <div>about us</div>
      <div>support</div>
      <div>account</div>
      <span>DevBy HimanshuSingh</span>
    </div>
  );
};

const NevBar = () => {
  const [isRotated, setIsRotated] = useState(false);

  return (
    <div className={`nevMain ${isRotated ? 'expanded' : ''}`}>
      <div className='logo'>
        <div style={{ marginLeft: "48px" }}>
          <img style={{ width: "42px" }} src={logo} alt="" />
        </div>
        <div style={{ marginLeft: "11px" }}>ae.rs.en.se</div>
      </div>
      <div className='Nbar'>
        <div>ai.pin</div>
        <div>shop</div>
        <div>about us</div>
        <div>support</div>
        <div>account</div>
      </div>
      <div className='mobD'>
        <img
          onClick={() => {
            setIsRotated(!isRotated);
          }}
          src={plus}
          alt=""
          style={{ transform: isRotated ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.4s ease' }}
        />
      </div>
      {isRotated && <ExpandedContainer />}
    </div>
  );
};

export default NevBar;
