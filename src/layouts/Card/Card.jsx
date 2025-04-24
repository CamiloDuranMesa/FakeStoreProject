import React from 'react'

export const Card = (products) => {

    const {title, price, description, category, image} = products
  return (
    <div className=''>
        <h1 className='text-xl'>{title}</h1>
        <img src={image} alt={title}></img>
        <p>{description}</p>
        <p>Categoria: {category}</p>
        <p>Preciodel prooducto: {price}</p>

    </div>
  )
}
