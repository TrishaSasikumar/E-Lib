import React from 'react';
import Fixed from '../components/fixed';
import "./styles.css";

import img1 from '../images/1.jpg' ;
import img2 from '../images/2.jpg' ;
import img3 from '../images/3.jpg' ;
import img4 from '../images/4.jpg' ;
import img5 from '../images/5.jpg' ;


const  Home = () => {
  return (
      
      <Fixed>    
      <main>
        <div className="image-section">
          <img src={img1} alt="libimage"/>
          <img src={img2} alt="libimage"/>
          <img src={img3} alt="libimage"/>
          <img src={img4} alt="libimage"/>
          <img src={img5} alt="libimage"/>
        </div>
      </main>
      </Fixed>
  );
}

export default Home;
