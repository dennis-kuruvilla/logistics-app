import {
    useParams
  } from "react-router-dom"
  import React, { useState, useEffect} from 'react'

  import axios from 'axios'
import Togglable from "./Togglable"

    const DetailedProduct = ({editProduct}) => {

        
        const [editview,setEditView] = useState(false)

        const [name, setName] = useState('') 
        const [description, setDescription] = useState('') 
        const [price, setPrice] = useState('') 
        const [quantity, setQuantity] = useState('') 


        const id = useParams().id

        useEffect(() => {           
            getProduct();
        }, []);
        
        const getProduct=()=>{
            axios
          .get(`http://192.168.1.12:3001/products/${id}`)
          .then(response => {
            console.log('got the required prduct')
            // console.log(response.data)
            
            setName(response.data.name)
            setDescription(response.data.description)
            setPrice(response.data.price)
            setQuantity(response.data.quantity)
          })
        }

        // console.log(name,description)

        const toggleEditView=(flag)=>
        {
            setEditView(flag)
        }

        const editingProduct = (event) => {
            event.preventDefault()
            const editedproduct= {
                name: name,
                description: description,
                price: price,
                quantity: quantity,
            }
            editProduct(editedproduct,id)
            toggleEditView(false)
        }


        if(editview){
        return(

            <form className="text-center" onSubmit={editingProduct}>
            <div className="form-group">
                
                <input onChange={(event) => {setName(event.target.value)}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" value={name}/>
            </div>
            <div className="form-group">
                
                <input onChange={(event) => {setDescription(event.target.value)}}type="text" className="form-control" id="formGroupExampleInput2" placeholder="Description" value={description}/>
            </div>
            <div className="form-group">
               
                <input onChange={(event) => {setPrice(event.target.value)}}type="number" className="form-control" id="formGroupExampleInput2" placeholder="Price" value={price}/>
            </div>
            <div className="form-group">
                
                <input onChange={(event) => {setQuantity(event.target.value)}}type="number" className="form-control" id="formGroupExampleInput2" placeholder="Initial Quantity" value={quantity}/>
            </div>
            <button type="submit" className="btn btn-primary btn-lg">Save</button>
            <button onClick={()=>toggleEditView(false)} className="btn btn-secondary btn-lg">Discard</button>
        </form>
        )
        }


      
    return (
        
        <div className="text-center">

            <h3><strong>{name}</strong></h3>

            <p><strong>ID: {id}</strong></p>      

            <p>{description}</p>  
            <p>Price: {price}</p>
            <p>Available Quantity: {quantity}</p>
            <button onClick={()=>toggleEditView(true)}  className="btn btn-primary btn-lg">Edit</button>

        </div>

    )
}

export default DetailedProduct

