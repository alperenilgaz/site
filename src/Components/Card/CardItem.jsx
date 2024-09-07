import React, { useState } from 'react'
import './CardItem.css'
import { IoMdArrowDropdownCircle } from "react-icons/io";


import { AiFillCloseCircle } from "react-icons/ai";
import { FiSquare } from "react-icons/fi";
import { Cursor } from 'react-simple-typewriter';
import { IoMdArrowDropupCircle } from "react-icons/io";
import Modal from '../Modal/Modal';
import { Button, message } from 'antd';




const CardItem = ({ item }) => {
    const [minimize, setMinimize] = useState(false)
    const [modalIsOpen, setmodalIsOpen] = useState(false)

    const toogleClick = () => {
        setmodalIsOpen(!modalIsOpen)
    }

const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'error',
      content: 'You cant close my career  it s an ongoing journey of growth and success! ',
      duration: 5,
      className:"message",
      
    });
  };
    return (
        <>
            <div className={`card-item ${minimize === true ? 'mini' : ''} `}>
                <div className="card-item-header">
                    <div className="header-wrap">
                        <div className="header-text">
                            <p>{`alperen@linux-desktop:/tmp/${item.title}`}</p>
                        </div>
                        <div className="header-icon">
                            <div onClick={() => setMinimize(!minimize)} className="minus">
                                {
                                    minimize === true ? <IoMdArrowDropdownCircle /> : <IoMdArrowDropupCircle />

                                }
                            </div>

                            <div onClick={toogleClick} className="square">
                                <FiSquare />
                            </div>
                            {contextHolder}
                            <div onClick={success} className="close">
                                <AiFillCloseCircle />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="menu-items">
                    <ul>
                        <li>File</li>
                        <li>Edit</li>
                        <li>View</li>
                        <li>Terminal</li>
                        <li>Edit</li>
                    </ul>
                </div>

                <div className={`card-content ${minimize === true ? 'mini' : ''}`}>
                    <div className="wrap-propmt">
                        <div className="shell">
                            <p>root@alperenilgaz:~#</p>
                        </div>
                        <div className="prompt">
                            <p>cat {item.title}.txt</p>
                        </div>
                    </div>
                    <div className="command-output">
                        <p>{item.content}</p>
                    </div>
                    <div className="wrap-propmt">
                        <div className="shell">
                            <span>root@alperenilgaz:~#</span>
                            <span><Cursor cursorStyle='|' /></span>
                        </div>
                    </div>

                </div>
            </div>
            {modalIsOpen && <Modal setmodalIsOpen={setmodalIsOpen} item={item}/>}
        </>
    )
}

export default CardItem