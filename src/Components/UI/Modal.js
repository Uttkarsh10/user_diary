import React, { Fragment } from 'react'
import styles from './Modal.module.css'
import ReactDOM  from 'react-dom'

const Backdrop = () => {
    return <div className={styles.backdrop}/>
}

const ModalOverlay = (props) => {
    return <div className={styles.modal}>
        <div>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlay'); 

function Modal(props) {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
  )
}

export default Modal