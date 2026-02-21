import React from 'react'
import "./carousel.css"
import {useState} from "react";

// import AWS from "../assets/aws_logo.svg"
// import CSS from "../assets/css_logo.svg"
// import flutter from "../assets/flutter_logo.svg"
// import html from "../assets/html_logo.svg"
// import JS from "../assets/javascript_logo.svg"
// import python from "../assets/python_logo.svg"
// import react from "../assets/react_logo.svg"
// import sql from "../assets/sql_logo.svg"

import AWSCert from "../assets/aws_cert.png"
import Cert1 from "../assets/Cert1.png"
import Cert2 from "../assets/Cert2.png"
import Cert3 from "../assets/Cert3.png"
import Cert4 from "../assets/Cert4.png"
import Cert5 from "../assets/Cert5.png"
import Cert6 from "../assets/Cert6.png"

const Carousel = () => {

    const [zoomedImage, setZoomedImage] = useState(null);

    const handleZoom = (src) => setZoomedImage(src);
    const closeZoom = () => setZoomedImage(null);

    const certImages = [AWSCert, Cert1, Cert2, Cert3, Cert4, Cert5, Cert6];


  return (
    <div className='TechStack_Certs'>
        <h1 className='Title'><span className='stack'>Tech Stack</span> & <span className='Certs'>Certifications</span></h1>

        <div className='Carousel'>

            <div aria-hidden className='Group'>

                {/* <div className='Card'>
                    <img className = "Tech_Image" src = {html} alt = "Logo"></img>
                    <h4>HTML</h4>
                </div>

                <div className='Card'>
                    <img className = "Tech_Image" src = {CSS} alt = "Logo"></img>
                    <h4>CSS</h4>
                </div>

                <div className='Card'>
                    <img className = "Tech_Image" src = {JS} alt = "Logo"></img>
                    <h4>Javascript</h4>
                </div>

                <div className='Card'>
                    <img className = "Tech_Image" src = {sql} alt = "Logo"></img>
                    <h4>MYSQL</h4>
                </div>

                <div className='Card'>
                    <img className = "Tech_Image" src = {flutter} alt = "Logo"></img>
                    <h4>Flutter</h4>
                </div>

                <div className='Card'>
                    <img className = "Tech_Image" src = {python} alt = "Logo"></img>
                    <h4>Python</h4>
                </div>

                <div className='Card'>
                    <img className = "Tech_Image" src = {AWS} alt = "Logo"></img>
                    <h4>Amazon Web Service</h4>
                </div>

                <div className='Card'>
                    <img className = "Tech_Image" src = {react} alt = "Logo"></img>
                    <h4>React</h4>
                </div> */}

                <div className='Card'>
                    <h4>HTML</h4>
                </div>

                <div className='Card'>
                    <h4>Python</h4>
                </div>

                <div className='Card'>
                    <h4>Flutter</h4>
                </div>

                <div className='Card'>
                    <h4>React</h4>
                </div>

                <div className='Card'>
                    <h4>CSS</h4>
                </div>


                <div className='Card'>
                    <h4>Javascript</h4>
                </div>


                <div className='Card'>
                    <h4>MySQL</h4>
                </div>

                <div className='Card'>
                    <h4>AWS</h4>
                </div>


            </div>
            <div aria-hidden className='Group'>

                {/* <div className='Card'>
                    <img className = "Tech_Image" src = {html} alt = "Logo"></img>
                    <h4>HTML</h4>
                </div>

                <div className='Card'>
                    <img className = "Tech_Image" src = {CSS} alt = "Logo"></img>
                    <h4>CSS</h4>
                </div>

                <div className='Card'>
                    <img className = "Tech_Image" src = {JS} alt = "Logo"></img>
                    <h4>Javascript</h4>
                </div>

                <div className='Card'>
                    <img className = "Tech_Image" src = {sql} alt = "Logo"></img>
                    <h4>MYSQL</h4>
                </div>

                <div className='Card'>
                    <img className = "Tech_Image" src = {flutter} alt = "Logo"></img>
                    <h4>Flutter</h4>
                </div>

                <div className='Card'>
                    <img className = "Tech_Image" src = {python} alt = "Logo"></img>
                    <h4>Python</h4>
                </div>

                <div className='Card'>
                    <img className = "Tech_Image" src = {AWS} alt = "Logo"></img>
                    <h4>Amazon Web Service</h4>
                </div>

                <div className='Card'>
                    <img className = "Tech_Image" src = {react} alt = "Logo"></img>
                    <h4>React</h4>
                </div> */}

                <div className='Card'>
                    <h4>HTML</h4>
                </div>

                <div className='Card'>
                    <h4>Python</h4>
                </div>

                <div className='Card'>
                    <h4>Flutter</h4>
                </div>

                <div className='Card'>
                    <h4>React</h4>
                </div>

                <div className='Card'>
                    <h4>CSS</h4>
                </div>


                <div className='Card'>
                    <h4>Javascript</h4>
                </div>


                <div className='Card'>
                    <h4>MySQL</h4>
                </div>

                <div className='Card'>
                    <h4>AWS</h4>
                </div>
            </div>

        </div>


        <div className='Carousel_Certifications'>
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className='Group_Certifications'>
            {certImages.map((imgSrc, i) => (
              <div key={i} className='Card_Certs' onClick={() => handleZoom(imgSrc)}>
                <img className='Tech_Image' src={imgSrc} alt={`Cert ${i + 1}`} />
              </div>
            ))}
          </div>
        ))}
      </div>

      {zoomedImage && (
        <div className="ZoomOverlay" onClick={closeZoom}>
          <div className="ZoomContainer" onClick={(e) => e.stopPropagation()}>
            <img src={zoomedImage} alt="Zoomed Cert" className="ZoomedImage" />
            <button className="CloseBtn" onClick={closeZoom}>×</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Carousel