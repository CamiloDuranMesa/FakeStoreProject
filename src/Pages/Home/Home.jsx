import { Main } from '../../layouts/Main/Main'
import '../../index.css'
import { Card } from '../../layouts/Card/Card'
import { useState, useEffect } from 'react'
import { InputSearch } from '../../components/InputSearch/InputSearch'

const URL = 'https://fakestoreapi.com/products'


export const Home = () => {

  const [products, setProducts] = useState([])
  const [productInput, setProductInput] = useState("")

  useEffect(() => {
    const Products = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data);
    };

      Products();
  }, []); 

  const SearchProduct = async (e) => {
    const value = e.target.value;
    setProductInput(value);

    if (value === "") {
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data);
      return;
    }


    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filtered);
  }

  return (
    <Main>
      <div className='flex justify-center items-center flex-col'>
        <InputSearch contentInput={productInput} SearchProduct={SearchProduct} />
        <h1 className='text-black bg-amber-400 mb-[1rem] p-[1rem] rounded-2xl text-2xl'>Nuestros productos</h1>
      </div>
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
