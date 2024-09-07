import React from 'react'
import './SocialMedia.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const SocialMedia = () => {
  return (
    <>
   
    <div className="social-media">
        <div className="github">
           <a href="https://github.com/alperenilgaz"><FaGithub /></a>
        </div>
        <div className="linkedin">
            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"><FaLinkedin /></a>
        </div>
        <div className="instagram">
           <a href=""><FaInstagramSquare /></a>
        </div>
    </div>
    <div className="statistics">
        <div className="statistics-title">
            <h3>Most Used Languages</h3>
        </div>
        <div className="statistics-content">
            <div className="js"></div>
            <div className="css"></div>
            <div className="html"></div>
            <div className="c"></div>
            <div className="scss"></div>
            <div className="python"></div>
        </div>
        <div className="percent-languages">
            <div className="javascript">
                <p></p>
                <span>JavaScript 60.38%</span>
            </div>
            <div className="C">
                <p></p>
                <span>C 3.31%</span>
            </div>
            <div className="CSS">
                <p></p>
                <span>CSS 21.33%</span>
            </div>
            <div className="SCSS">
                <p></p>
                <span>SCSS 1.93%</span>
            </div>
            <div className="HTML">
                <p></p>
                <span>HTML 12.09%</span>
            </div>
            <div className="PYTHON">
                <p></p>
                <span>PYTHON 0.98%</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default SocialMedia