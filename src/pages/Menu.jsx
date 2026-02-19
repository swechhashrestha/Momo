import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  const getRecipes = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes");
      setRecipes(res.data.recipes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="w-full py-20 justify-center  p-20">
      {recipes.length > 0 ? (
        <div className="flex flex-wrap ">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="p-4"
              onClick={() => {
                navigate(`/productDetail/${recipe.id}`,{state:recipe});
              }}
            >
              <div className="bg-white w-100 h-100 shadow-lg rounded-xl p-4 text-center">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-70 object-cover rounded-lg"
                />
                <h2 className="text-xl font-semibold mt-3">{recipe.name}</h2>
                <h3 className="text-orange-700 text-2xl font-bold">
                  Rs. {recipe.caloriesPerServing}
                </h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">Loading Recipes...</div>
      )}
    </div>
  );
};

export default Menu;
