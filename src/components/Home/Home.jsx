import React, { useEffect } from "react";
import "./home.css";
import burger from "../../assets/images/home__images/burger.png";
import dish from "../../assets/images/home__images/dish.png";
import frites from "../../assets/images/home__images/frites.png";
import potato from "../../assets/images/home__images/potato.png";
import tomato from "../../assets/images/home__images/tomato.png";
import lettuce from "../../assets/images/home__images/lettuce.png";

import ScrollReveal from "scrollreveal";

const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 300,
      reset: false, // Mettre true si tu veux que l'animation se répète
    });

    sr.reveal(".home__data");
    sr.reveal(".home__dish", {
      origin: "bottom",
      delay: 500,
      distance: "100px",
      duration: 1500,
    });

    sr.reveal(".home__burger", {
      delay: 1200,
      distance: "100px",
      duration: 1500,
    });
    sr.reveal(".home__ingredient", {
      delay: 1600,
      interval: 100,
    });
  }, []);
  return (
    <section className="home__section" id="home">
      <div className="container home__container grid">
        <div className="home__data">
          <h1 className="home__title">
            Love Every <br /> Burger
          </h1>
          <p className="home__description">
            We serve the best burgers on the planet, paving the way for cooking
            and preparing hot, delicious burgers.
          </p>
          <a href="#popular" className="button">
            Bite Now
          </a>
          <img
            src={frites}
            alt="img__sticker-potatos"
            className="home__sticker-potatos"
          />
        </div>
        <div className="home__images">
          <img src={burger} alt="img__burger" className="home__burger" />
          <img src={dish} alt="img__dish" className="home__dish" />
          <img
            src={potato}
            alt="img__ingredients"
            className="home__ingredient home__potato-1"
          />
          <img
            src={potato}
            alt="img__ingredients"
            className="home__ingredient home__potato-2"
          />

          <img
            src={tomato}
            alt="img__ingredients"
            className="home__ingredient home__tomato-1"
          />
          <img
            src={tomato}
            alt="img__ingredients"
            className="home__ingredient home__tomato-2"
          />

          <img
            src={lettuce}
            alt="img__ingredients"
            className="home__ingredient home__lettuce-1"
          />
          <img
            src={lettuce}
            alt="img__ingredients"
            className="home__ingredient home__lettuce-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
