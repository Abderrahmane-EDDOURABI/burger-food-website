import React, { useEffect } from "react";
import "./popular.css";
import { RiShoppingBag3Fill } from "react-icons/ri";

import chicken__burger from '../../assets/images/popular__images/chicken_burger.png';
import classic__burger from '../../assets/images/popular__images/classic_burger.png';
import meat__burger from '../../assets/images/popular__images/meat_burger.png';
import big__burger from '../../assets/images/popular__images/big_burger.png';
import grill_burger from '../../assets/images/popular__images/grill_burger.png';

import ScrollReveal from "scrollreveal";

const popularData = [
  {
    id: 1,
    img: chicken__burger,
    title: `Chicken`,
    subtitle: "Burger",
    price: 6,
  },
  {
    id: 2,
    img: meat__burger,
    title: "Meat",
    subtitle: "Burger",
    price: 10,
  },
  {
    id: 3,
    img: grill_burger,
    title: "Grill",
    subtitle: "Burger",
    price: 12,
  },
  {
    id: 4,
    img: classic__burger,
    title: "Classic",
    subtitle: "Burger",
    price: 8,
  },
  {
    id: 5,
    img: big__burger,
    title: "Big",
    subtitle: "Burger",
    price: 15,
  },
];
const Popular = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 300,
      reset: false, // Mettre true si tu veux que l'animation se répète
    });

    sr.reveal(".popular__card", {
      interval: 100
    });
  }, []);
  return (
    <section className="popular__section" id="popular">
      <h2 className="section__title">
        Most Devoured <br /> Burgers
      </h2>
      <div className="container popular__container grid">
        {popularData.map((popular) => {
          return (
            <article className="popular__card" key={popular.id}>
              <img src={popular.img} alt="popular__img" className="popular__img" />
              <h2 className="popular__title">
                {popular.title} <br/> {popular.subtitle}
              </h2>
              <span className="popular__price">$ {popular.price}</span>
              <button className="popular__button">
                <RiShoppingBag3Fill />
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Popular;
