import React from 'react'
import {useEffect} from "react";
import { HiOutlineX } from "react-icons/hi";

const Modal = ({onClose, description}) => {
    const keydownHandler = ({key}) =>{
        switch (key) {
            case "Escape":
                onClose();
                break;
            default:
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", keydownHandler);
    });

    return (
        <div className="modal fixed top-0 bottom-0 left-0 right-0 w-full z-50 flex items-center justify-center">
            <div className="modal-dialog w-full max-w-md bg-red relative my-5 flex flex-col items-center justify-center h-72 fade transition ease-in-out duration-300 rounded">
                <span className="modal-close cursor-pointer absolute top-3 right-3 text-white" onClick={onClose}>
                    <HiOutlineX className="h-6 w-6" />
                </span>
                <div className="modal-body">
                    <div className="modal-content text-3xl font-bold text-center text-white p-10">{description}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal