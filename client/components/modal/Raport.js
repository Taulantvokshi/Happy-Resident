import React from 'react'
import ReactDOM from 'react-dom'

const Modal = () => {
  return ReactDOM.createPortal(
    <div className="sna">Hey</div>,
    document.getElementById('raport')
  )
}

export default Modal
