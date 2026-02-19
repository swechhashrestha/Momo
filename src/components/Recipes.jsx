import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes?limit=10");
      console.log(res.data.recipes);
      setRecipes(res.data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full mx-auto py-10">
      {recipes.length > 0 ? (
        <Slider {...settings}>
          {recipes.map((recipe) => (
            <div key={recipe.id} className="p-4">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-80 mx-auto"
              />
              <h2 className="text-xl font-bold mt-4 text-center">
                {recipe.name}
              </h2>
              <h3 className="text-center text-gray-600">
                Calories: {recipe.caloriesPerServing}
              </h3>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="text-center">No Recipes</div>
      )}
    </div>
  );
};

export default Recipes;
