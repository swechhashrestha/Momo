import React, { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import axios from "axios";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [filterItem, setFilterItem] = useState([]);

  const getRecipes = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes?limit=30");
      setRecipes(res.data.recipes);
      setFilterItem(res.data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const filterProduct = (cuisine) => {
    const filtered = recipes.filter((item) => item.cuisine === cuisine);
    setFilterItem(filtered);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-white flex flex-col items-center p-8 gap-y-8">

      <div className="text-center font-bold space-y-4">
        <h1 className="text-[35px]">
          Our <span className="text-[#D95103]">Most Popular</span> Recipes
        </h1>
        <p className="text-xl font-medium text-gray-500">
          Browse through varieties of recipes with fresh ingredients
        </p>
      </div>

      <div className="space-x-3">
        <button
          onClick={() => filterProduct("American")}
          className="border border-black w-24 hover:bg-gray-300 rounded-4xl font-bold p-2"
        >
          American
        </button>

        <button
          onClick={() => filterProduct("Italian")}
          className="border border-black w-20 hover:bg-gray-300 rounded-4xl font-bold p-2"
        >
          Italian
        </button>

        <button
          onClick={() => filterProduct("Indian")}
          className="border border-black w-20 hover:bg-gray-300 rounded-4xl font-bold p-2"
        >
          Indian
        </button>

        <button
          onClick={() => setFilterItem(recipes)}
          className="border border-black w-20 hover:bg-gray-300 rounded-4xl font-bold p-2"
        >
          All
        </button>
      </div>

      <div className="w-full px-20">
        {filterItem.length > 0 ? (
          <Slider {...settings}>
            {filterItem.map((recipe) => (
              <div key={recipe.id} className="p-4">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden text-center p-4">

                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-56 object-cover hover:scale-110 transition duration-300"
                    />
                  </div>

                  <h2 className="text-lg font-bold mt-4">
                    {recipe.name}
                  </h2>

                  <h3 className="text-gray-500 mt-1">
                    Price:
                    <span className="text-orange-500 font-semibold ml-1">
                      Rs.{recipe.caloriesPerServing}
                    </span>
                  </h3>

                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-center text-gray-500 text-lg">
            No Recipes Found
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/menu");
          }}
          className="bg-[#0C6967] text-white p-4 mt-4 flex justify-center items-center gap-2 rounded-full hover:bg-[#094f4d]"
        >
          Explore Food Menu
          <BsArrowRightShort size={20} />
        </button>
      </div>
    </section>
  );
};

export default Recipes;