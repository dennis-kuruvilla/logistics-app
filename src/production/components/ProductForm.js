import React, { useState } from 'react'
const ProductForm = ({addProduct}) => {

    const [name, setName] = useState('') 
    const [description, setDescription] = useState('') 
    const [price, setPrice] = useState('') 
    const [quantity, setQuantity] = useState('') 


    const createProduct = (event) => {
        event.preventDefault()
        //console.log(name,description,price,quantity)
        const product= {
            name: name,
            description: description,
            price: price,
            quantity: quantity,
        }
        addProduct(product)
        setName('')
        setDescription('')
        setPrice('')
        setQuantity('')
      }

    return (
        <div className="container">
        <form onSubmit={createProduct}>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Product Name</label>
                <input onChange={(event) => {setName(event.target.value)}} type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" value={name}/>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Product Description</label>
                <input onChange={(event) => {setDescription(event.target.value)}}type="text" className="form-control" id="formGroupExampleInput2" placeholder="Description" value={description}/>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Price</label>
                <input onChange={(event) => {setPrice(event.target.value)}}type="number" className="form-control" id="formGroupExampleInput2" placeholder="Price" value={price}/>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Quantity</label>
                <input onChange={(event) => {setQuantity(event.target.value)}}type="number" className="form-control" id="formGroupExampleInput2" placeholder="Initial Quantity" value={quantity}/>
            </div>
            <button type="submit" className="btn btn-primary btn-lg">Add</button>
        </form>
        </div>
    )
}

export default ProductForm
