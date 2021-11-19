import {
    useParams
  } from "react-router-dom"
  import React, { useState, useEffect} from 'react'

  import axios from 'axios'


    const DetailedProduct = ({editProduct,deleteProduct,enableNotification}) => {

        
        const [editview,setEditView] = useState(false)

        const [name, setName] = useState('') 
        const [description, setDescription] = useState('') 
        const [price, setPrice] = useState('') 
        const [quantity, setQuantity] = useState('') 


        const id = useParams().id

        useEffect(() => {           
            getProduct();
            //following comment is to avoid an unneccesary warning in console
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        
        const getProduct=()=>{
            axios
          .get(`api/products/${id}`)
          .then(response => {
            //console.log('got the required prduct', typeof response.data)
            //console.log(response.data)
            
            setName(response.data.name)
            setDescription(response.data.description)
            setPrice(response.data.price)
            setQuantity(response.data.quantity)
          })
          .catch(err=>
            enableNotification("Unable to find the product","alert-danger"))
        }

        // //console.log(name,description)

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

        const deletingProduct = (event) =>{
            var answer = window.confirm("Are you sure you want to delete this product?");
            if (answer) {
                deleteProduct(id)
            }
                    }


        if(editview){
        return(

            <div className="container">

            <div align="right">
                <button className="btn btn-danger btn-sm" onClick={deletingProduct}>Delete</button>
            </div>

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
            </div>
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

