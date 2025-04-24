import React from 'react';

export const Card = ({ title, price, description, category, image }) => {
  return (
    <div className="max-w-sm h-full flex flex-col justify-between rounded overflow-hidden shadow-lg bg-white p-4">
      <img className="w-full object-cover h-48 mb-4" src={image} alt={title} />
      <div className="flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-700 flex-grow">{description}</p>
        <p className="text-sm text-gray-600 mt-2">Categoría: <span className="font-medium">{category}</span></p>
      </div>

      <p className="text-lg text-green-600 font-semibold mt-4">Precio: ${price}</p>
    </div>
  );
};
