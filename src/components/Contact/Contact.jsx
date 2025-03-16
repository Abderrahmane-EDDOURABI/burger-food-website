import React, { useEffect } from 'react'
import './contact.css';

import { RiWhatsappFill } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiTelegram2Fill } from "react-icons/ri";

import contactWomen from "../../assets/images/contact__images/contact__women.png"
import soda from "../../assets/images/contact__images/contact-soda.png"
import burger from "../../assets/images/contact__images/contact-burger.png"

import ScrollReveal from 'scrollreveal';

const Contact = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 300,
      reset: false, // Mettre true si tu veux que l'animation se répète
    });

    sr.reveal(".contact__image", {
      origin: "left"
    });

    sr.reveal(".contact__data", {
      origin: "right"
    });
  }, []);
  return (
    <section className='contact__section' id='contact'>
        <div className="container contact__container grid">
            <h2 className='section__title'>Contact Now</h2>
            <div className="contact__content grid">
              <div className="contact__data grid">
                <div>
                  <h3 className='contact__title'>Write Us</h3>
                  <div className="contact__social">
                    <a href="https://www.watsapp.com" target="_blank" rel="noopener noreferrer">
                      <RiWhatsappFill/>
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <RiFacebookCircleFill/>
                    </a>
                    <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer">
                      <RiTelegram2Fill/>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="contact__title">Call Us and Order</h3>
                  <address className="contact__info">
                  +33-600-00-00-00 <br/>
                  +33-89-00-00-00
                  </address>
                </div>
                <div>
                  <h3 className="contact__title">Find us here</h3>
                  <address className="contact__info">
                    Grand Est - Mulhouse - France
                    Av. Moon #68200
                  </address>
                </div>
              </div>
              <div className="contact__image">
                <img src={contactWomen} alt="contact__img" className='contact__img'/>
              </div>
            </div>
            <img src={soda} alt="contact__img" className='contact__sticker-1' />
            <img src={burger} alt="contact__img" className='contact__sticker-2' />
        </div>
    </section>
  )
}

export default Contact