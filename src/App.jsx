import { useState } from 'react'
import './App.css'
import { Product } from './components/shop/product'

function App() {
  // Внутри компонента App
  // return (
  //   <Product />
  // )
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <Product />
      </div>
    </div>
  )
}

export default App
