import React, { useState, useEffect} from 'react'
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import axios from 'axios'

const ProdApp = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios
          .get('http://192.168.1.5:3001/products')
          .then(response => {
            console.log('promise fulfilled')
            setNotes(response.data)
          })
      }, [])
      console.log('render', notes.length, 'notes')

    return (
        <div>
        <Navbar/>
        <Products/>
        </div>

    )
}

export default ProdApp