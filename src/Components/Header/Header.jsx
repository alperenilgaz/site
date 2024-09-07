import React from 'react'
import './Header.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Header = () => {
    const [header] = useTypewriter({
        words: ['Alperen İlgaz', 'Frontend Developer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    const [leftSubHeader] = useTypewriter({
        words:['Frontend Developer','ReactJS'],
        loop:2,
        typeSpeed: 120,
        deleteSpeed: 80,

    })
    const [rightSubHeader] = useTypewriter({
        words:['Backend Developer','Django'],
        loop:2,
        typeSpeed: 120,
        deleteSpeed: 80,

    })
    return (
        <main className='main-header'>
            <div className="top-header">
                <span>{header}</span>
                <span><Cursor cursorStyle='|' /></span>
                <div className="subHeader">

                </div>
            </div>
            <div className="sub-header">
              <div className="left">
                <span>{leftSubHeader}</span>
                <span><Cursor cursorStyle='|' /></span>
              </div>
              <div className="right">
              <span>{rightSubHeader}</span>
              <span><Cursor cursorStyle='|' /></span>
              </div>
     
            </div>
        </main>
    )
}

export default Header