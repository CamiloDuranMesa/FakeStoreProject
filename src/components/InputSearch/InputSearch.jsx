import React from 'react'

export const InputSearch = ({contentInput, SearchProduct}) => {
  return (
    <input

        type="text"

        value={contentInput}

        onChange={SearchProduct}

        placeholder="Ingrese a buscar"

        className=" text-amber-600 border px-4 py-2 mb-4 rounded-md w-full max-w-md"

      />
  )
}
