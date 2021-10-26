import React, { useState, useEffect} from 'react'
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Divider from './components/Divider'
import axios from 'axios'

const ProdApp = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
          .get('http://192.168.1.5:3001/products')
          .then(response => {
            console.log('promise fulfilled')
            setProducts(response.data)
          })
      }, [])
      console.log('rendered', products.length, 'products')

    return (
        <div>
        <Navbar/>
        <Products products={products}/>
        <Divider/>
        </div>

    )
}

export default ProdApp