import React, { useState } from 'react'
import {
     Link
  } from "react-router-dom"
import '../styles/SearchBox.css';

const Search = (products) => {

    const [text, setText] = useState('') 
    const [suggestions,setSuggestions] = useState([])
    const [searchby,setSearchBy] = useState('name')

    //console.log("searchby:",searchby)

    // //console.log("type:",typeof products.products, "products:",products.products)
    
    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = products.products.filter(product=> {
                const regex = new RegExp(`${text}`,"gi");
                if(searchby==='name')
                    return product.name.match(regex)
                else{
                    let id_string=String(product.id)
                    return id_string.match(regex)
                }
            
            })
            //console.log("matches:",matches)
        }
        setText(text)
        setSuggestions(matches)
    }

    return (
    
        <div className="container text-center" > 
            <h3><strong>Search for a product:</strong></h3>

            

            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="name" checked={searchby==='name'} onChange={e=>setSearchBy(e.target.value)}/>
                <label className="form-check-label" htmlFor="inlineRadio1">Search by Name</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="id" onChange={e=>setSearchBy(e.target.value)}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Search by ID</label>
            </div>

           


                <input type="text" className="col-md-12 input" value={text} 
                onChange={e => onChangeHandler(e.target.value)}
                onBlur={()=>{
                    setTimeout(()=> setSuggestions([]),300)
                }}
                />

         {suggestions && suggestions.map((suggestion,i) =>     
            <div key={i} className="col-md-12 justify-content-md-center suggestion" >   
            <Link to={`/${suggestion.id}`} style={{ textDecoration: 'none',color: 'black' }}>    
                <h5>{suggestion.name}</h5>
                
                <p>{suggestion.description}</p>
                <p>ID: {suggestion.id}</p>
            </Link>
            </div>
           
    )}
    </div>
    )
}

export default Search