import React, { useEffect } from "react";
import "./recipe.css";

import recipe from '../../assets/images/recipe__images/recipe.png';

import beef from '../../assets/images/recipe__images/beef.png';
import cheddar from '../../assets/images/recipe__images/cheddar.png';
import bread from '../../assets/images/recipe__images/bread.png';
import sauces from '../../assets/images/recipe__images/sauces.png';
import vegetables from '../../assets/images/recipe__images/vegetables.png';

import ScrollReveal from "scrollreveal";

const recipeData = [
  {
    id: 1,
    img: bread,
    title: "Bread",
    description: "Fresh bread, baked to perfection.",
  },
  {
    id: 2,
    img: cheddar,
    title: "Cheese",
    description: "Cheese for a fantastic and healthy future.",
  },
  {
    id: 3,
    img: beef,
    title: "Meat",
    description: "100% pure beef, big and meaty.",
  },
  {
    id: 4,
    img: vegetables,
    title: "Vegetables",
    description: "Vegetables full of the essence of nature and organic.",
  },
  {
    id: 5,
    img: sauces,
    title: "Sauces",
    description: "Fresh sauces, delicious for the palate.",
  },
];

const Recipe = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 300,
      reset: false, // Mettre true si tu veux que l'animation se répète
    });

    sr.reveal(".recipe__root-img", { 
      origin: "left"
     });
     
    sr.reveal(".recipe__data", { 
        origin: "right"
    });
}, []);
  return (
    <section className="recipe__section" id="recipe">
      <h2 className="section__title">Our Secret Recipe</h2>
      <div className="container recipe__container grid">
        <div className="recipe__image">
          <img src={recipe} alt="recipe__img" className="recipe__root-img" />
        </div>
        <div className="recipe__data">
          {recipeData.map((recipe) => {
            return (
              <div className="recipe__card" key={recipe.id}>
                <div className="recipe__box">
                  <img src={recipe.img} alt="recipe__img" className="recipe__img" />
                </div>
                <div>
                  <h3 className="recipe__title">{recipe.title}</h3>
                  <p className="recipe__description">{recipe.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Recipe;
