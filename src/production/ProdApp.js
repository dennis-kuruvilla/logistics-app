import React, { useState, useEffect} from 'react'
import {
  Switch, Route
} from "react-router-dom"

// import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Divider from './components/Divider'
import Togglable from './components/Togglable'
import ProductForm from './components/ProductForm'
import DetailedProduct from './components/DetailedProduct'
import Search from './components/Search'
import Notification from './components/Notification'
import {NotificationManager} from 'react-notifications';
// import MainNavbar from '../Components/MainNavbar'

import axios from 'axios'

const ProdApp = () => {

    const [products, setProducts] = useState([])

    const [notification, setNotification] = useState('')
    const [notificationType, setNotificationType] = useState('')


    // const baseURL="http://192.168.1.12:3002/api/products"

    // const baseURL="/api/products"

    // const baseURL = "https://agile-sea-14605.herokuapp.com/api/products"

    const baseURL= process.env.REACT_APP_PRODUCTS_SERVER || '/api/products'


    

    //console.log("products:",products)

    useEffect(() => {
        axios
          .get(baseURL)
          .then(response => {
            //console.log('promise fulfilled')
            setProducts(response.data)
          }) // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      //console.log('rendered', products.length, 'products')


    const addProduct = (product) => {
      //console.log("product added")
      //console.log(product)

      axios
      .post(baseURL, product)
      .then(response => {
        setProducts(products.concat(response.data))
        //console.log("succesfully added")
        // enableNotification("Product added successfully!","alert-success")
        NotificationManager.success('Product added successfully!', 'Add successfull')
      })
      .catch(err=> {
        //console.log(err)
        // enableNotification("Unable to add product, please make sure the format is correct","alert-danger")
        NotificationManager.error('Unable to add product, please make sure the format is correct', 'Error')
      })
    }

    const editProduct = (editedproduct,id1) => {
      //console.log(editedproduct,id)
      const url = `${baseURL}/${id1}`
      const id= Number(id1)

      axios.put(url, editedproduct)
      .then(response => {
        // //console.log("respose:",response.data)
        // //console.log("types:",typeof id, typeof products[2].id)
        //USING != INSTEAD OF !== BEACUSE BOTH ID'S TYPE ARE DIFFERENT SOMEHOW (convert id to int using Number())
        //converted id to int

        setProducts(products.map(product => product.id !== id ? product : response.data))
        // enableNotification("Product edited successfully!","alert-success")
        NotificationManager.success('The changes have been saved', 'Edit Successful')
        
      })
      .catch(err=>{
        //console.log(err)
        // enableNotification("Unable to edit product","alert-danger")
        NotificationManager.error('Unable to edit product', 'Error')
      })
    }

    const deleteProduct = (id1) => {
      //console.log("deleteing:",id)
      const url = `${baseURL}/${id1}`
      const id= Number(id1)
      axios.delete(url)
      .then(response=>{
        setProducts(products.filter(n => n.id !== id))
        // enableNotification("Deleted Successfully!","alert-success")
        NotificationManager.success('The product is deleted from the database', 'Delete Successful')
      })
      .catch(err=>{
        // enableNotification("Unable to delete product","alert-danger")
        NotificationManager.error('Unable to delete product', 'Error')
        //console.log(err)
      })
    }

    const enableNotification= (text,type)=> {
        //console.log("notification type:",notification)
        setNotificationType(type)
        setNotification(text)
        setTimeout(()=>{
          setNotificationType('')
        setNotification('')
        },7000)
    }

    return (
        <div>
        
        {/* <Navbar/> */}
        {/* <MainNavbar/> */}
        <br/>
        <br/>
        
        {notification && <Notification text={notification} type={notificationType}/>}
        
      
        {/* <h4 onClick={goToDetails}>go to 3</h4> */}
        <Switch>
          
          <Route exact path="/Products/:id" >
            <br/>
            <DetailedProduct editProduct={editProduct} deleteProduct={deleteProduct} enableNotification={enableNotification}/>
          </Route>

          {/* <Route path={["/home", "/products","/"]}> */}
          <Route exact path="/Products" > 
            <Search products={products}/>
            <Divider/>
            <Products products={products}/>
            <Divider/>
            <Togglable buttonLabel='Add Product'><h3><strong>Add new product</strong></h3>
            <ProductForm addProduct={addProduct}/>
            </Togglable>
          </Route>

        </Switch>
        
        <br/>
      </div>
    )
}

export default ProdApp