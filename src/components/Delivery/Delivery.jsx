import React, { useEffect } from "react";
import "./delivery.css";

import glass from "../../assets/images/delivery__images/glass.png";
import deliverBurger from "../../assets/images/delivery__images/delivery-burger.png";

import ScrollReveal from "scrollreveal";

const Delivery = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 300,
      reset: false, // Mettre true si tu veux que l'animation se répète
    });

    sr.reveal(".delivery__burger-img", {
      origin: "left",
    });

    sr.reveal(".delivery__data", {
      origin: "right",
    });
  }, []);
  return (
    <section className="delivery__section" id="delivery">
      <div className="container delivery__container grid">
        <div className="delivery__data">
          <h2 className="section__title">Fast Delivery</h2>
          <p className="delivery__description">
            Place your order for your favorite burger and we will deliver it to
            your door in minutes, get in touch and don't leave hungry.
          </p>
          <a href="#contact" className="button">
            Contact Now
          </a>
          <img
            src={glass}
            alt="delivery__sticker-img"
            className="delivery__sticker-img"
          />
        </div>
        <img
          src={deliverBurger}
          alt="delivery__burger-img"
          className="delivery__burger-img"
        />
      </div>
    </section>
  );
};

export default Delivery;
