import React, { Fragment } from 'react'
import styles from './Modal.module.css'
import { ReactDOM } from 'react'

const Backdrop = () => {
    return <div className={styles.backdrop}/>
}

const ModalOverlay = () => {
    return <div className={styles.modal}>
        <div>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlay'); 

function Modal() {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop/>,portalElement)}
        {ReactDOM.createPortal(<Modal/>,portalElement)}
    </Fragment>
  )
}

export default Modal