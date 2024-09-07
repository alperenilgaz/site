import React from 'react'
import './Modal.css'
const Modal = ({item,setmodalIsOpen}) => {
    console.log(item);
    
    const handleCloseModal = (e) => {
        if(e.target.className='modal'){
            setmodalIsOpen(false)
        }
    }
  return (
   <div onClick={handleCloseModal} className="modal">
    <div onClick={(e) => e.stopPropagation()} className="modal-container">
        <div onClick={() => setmodalIsOpen(false)}  className="modal-cls-btn">
            <button>x</button>
        </div>
       <div className="modal-title">
        <h2>{item.title}</h2>
       </div>
       <div className="modal-content">
            <p>{item.modalContent}</p>
       </div>
    </div>
   </div>
  )
}

export default Modal