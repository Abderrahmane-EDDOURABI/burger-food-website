import React from 'react'
import './footer.css';
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiSnapchatFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
        <div className="container footer__container grid">
            <a href="#" className="footer__logo">Burger</a>
            <div className="footer__content grid">
              <a href="#" className='footer__link'>Terms & Agreements</a>
              <a href="#" className='footer__link'>Privacy Policy</a>
              <div className="footer__social">
                <a href="https://www.facebook.com" target='_blank'>
                  <RiFacebookCircleFill/>
                </a>
                <a href="https://www.instagram.com" target='_blank'>
                  <RiInstagramFill/>
                </a>
                <a href="https://www.snapchat.com" target='_blank'>
                    <RiSnapchatFill/>
                </a>
              </div>
            </div>
        </div>
        <span className="footer__copy">
          &#169; All Rights Reserved By Abderrahmane EDDOURABI ❤️
        </span>
    </footer>
  )
}

export default Footer