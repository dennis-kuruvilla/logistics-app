import React, { useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link,  useHistory
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Divider from './components/Divider'
import Togglable from './components/Togglable'
import ProductForm from './components/ProductForm'
import DetailedProduct from './components/DetailedProduct'
import Search from './components/Search'

import axios from 'axios'

const ProdApp = () => {

    const [products, setProducts] = useState([])

    const history = useHistory()

    console.log("products:",products)

    useEffect(() => {
        axios
          .get('http://192.168.1.12:3001/products')
          .then(response => {
            console.log('promise fulfilled')
            setProducts(response.data)
          })
      }, [])
      console.log('rendered', products.length, 'products')


    const addProduct = (product) => {
      console.log("product added")
      console.log(product)

      axios
      .post('http://192.168.1.12:3001/products', product)
      .then(response => {
        setProducts(products.concat(response.data))
        console.log("succesfully added")
      })
      .catch(err=> console.log(err))
    }

    // const goToDetails= () => {
    //   console.log("go to details")
    //   history.push('/4')
    // }\

    const editProduct = (editedproduct,id) => {
      console.log(editedproduct,id)
      const url = `http://192.168.1.12:3001/products/${id}`

      axios.put(url, editedproduct)
      .then(response => {
        // console.log("respose:",response.data)
        // console.log("types:",typeof id, typeof products[2].id)
        //USING != INSTEAD OF !== BEACUSE BOTH ID'S TYPE ARE DIFFERENT SOMEHOW
        setProducts(products.map(product => product.id != id ? product : response.data))
      })
      .catch(err=>{
        console.log(err)
      })
    }

    return (
        <div>
        <Router>
        <Navbar/>
        <br/>
      
        {/* <h4 onClick={goToDetails}>go to 3</h4> */}
        <Switch>
          
          <Route exact path="/:id" >
            <br/>
            <DetailedProduct editProduct={editProduct}/>
          </Route>

          {/* <Route path={["/home", "/products","/"]}> */}
          <Route exact path="/" > 
            <Search products={products}/>
            <Divider/>
            <Products products={products}/>
            <Divider/>
            <Togglable buttonLabel='Add Product'><h3><strong>Add new product</strong></h3>
            <ProductForm addProduct={addProduct}/>
            </Togglable>
          </Route>

        </Switch>
        </Router>
      </div>
    )
}

export default ProdApp