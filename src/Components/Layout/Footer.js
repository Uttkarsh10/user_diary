import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'


function Footer() {
  return (
    <div className={styles.footer}>
      <div style={{marginTop:'5px'}}>Contact Me</div>
      <div style={{marginTop:'10px'}}>
        <FontAwesomeIcon icon = {faLinkedin} className={styles['footer-icons']}/>
        <FontAwesomeIcon icon = {faInstagram} className={styles['footer-icons']}/>
        <FontAwesomeIcon icon = {faGithub} className={styles['footer-icons']}/>
      </div>
      <div style={{marginTop:'5px'}}>Uttkarsh Saini</div>
    </div>
  )
}

export default Footer