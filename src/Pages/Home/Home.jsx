import { Main } from '../../layouts/Main/Main'
import '../../index.css'
import { Card } from '../../layouts/Card/Card'
import { useState } from 'react'

const URL = 'https://fakestoreapi.com/products'


export const Home = () => {

  const [products, setProducts] = useState([])

  const handleGetProducts = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setProducts(data)
  }

  return (
    <Main>
      <button onClick={handleGetProducts} className='text-black'>Traer personajes</button>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          products.map(products => (
            <Card key={products.id} {...products}/>
          ))
        }
      </section>


    </Main>
  )
}
