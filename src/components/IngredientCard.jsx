import React from 'react'

const IngredientCard = ({title, items}) => {
  return (
   <div className="bg-white border-2 border-teal-600 rounded-xl p-6 shadow-sm">
      <h4 className="font-bold text-xl mb-4">{title}</h4>

      <ul className="space-y-2 text-gray-700 text-lg">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-orange-500">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientCard
