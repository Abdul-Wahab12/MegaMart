import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <h2 className='heading'>Welcome to Mega Mart Store</h2>
      <section>
        <h3>Results</h3> 
        <Products />
      </section>
    </div>
  )
}

export default Home