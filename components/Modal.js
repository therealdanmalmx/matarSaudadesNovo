import React from 'react'
import { HiOutlineX } from "react-icons/hi";

const Modal = ({onClose, title, description}) => {
  return (
    <div className="modal fixed top-0 bottom-0 left-0 right-0 w-full z-50 flex items-center justify-center">
      <div className="modal-dialog w-full max-w-md bg-red relative my-5 flex flex-col items-center justify-center h-72">
        <span className="modal-close pointer absolute top-3 right-3 text-white" onClick={onClose}>
            <HiOutlineX className="h-6 w-6" />
        </span>
        <div className="modal-header">
          <h3 className="modal-title font-bold text-3xl text-white mb-5">{title}</h3>
        </div>
        <div className="modal-body">
          <div className="modal-content text-center text-white">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal