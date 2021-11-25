import React, { useState, useEffect} from 'react'
import PlaceInput from "./PlaceInput"
import Select from 'react-select'
import Divider from '../../production/components/Divider'
import '../Styles/AddProductForm.css'

import axios from 'axios'

const ShipmentForm = () =>{

    const [fromaddress,setFromAddress] = useState('')
        const [toaddress,setToAddress] = useState('')
        const [fromcord,setFromCord] = useState({})
        const [tocord,setToCord] = useState({})
        const [distance,setDistance] = useState('')
        const [fromDC,setFromDC] = useState('EZ-Ship WareHouse')
        const [toWSLR,setToWSLR] = useState('')
        //use carrier.value to access the actual value. to avoid messing up 'select' component
        const [carrier,setCarrier] = useState('')
        const [reqproducts,setReqProducts] = useState([{
            Product: '',
            RequiredQuantity: 0
        }])
        const [products, setProducts] = useState([])
        
        const google = window.google;
        const productsURL= process.env.REACT_APP_PRODUCTS_SERVER || '/api/products'

        useEffect(() => {
            axios
              .get(productsURL)
              .then(response => {
                //console.log('promise fulfilled')
                setProducts(response.data)
              }) // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [])

        useEffect(() => {
            getDistance()    
              // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [fromcord,tocord])

        
        
        const options = [
            { value: 'ABC', label: 'ABS Logistics- Super Fast Delivery' },
            { value: 'LMN', label: 'LMN Logistics- Quick Delivery' },
            { value: 'XYZ', label: 'XYZ Logistics- Normal Delivery' }
          ]

        //Options data for products, dont waste time understanding this, too compliated. refere to the below 2 links for some help
        const productsOptions = products.map((product)=>{
            return{
                value: product.objId,
                label: product.name,
            }
        })

        console.log("reqproducts:",reqproducts)
        // console.log("carrier:",carrier)
        // console.log("products options:",productsOptions)
        //   console.log("InputFields", reqproducts);
        //   console.log("towslr:",toWSLR)
        // console.log("from:",fromaddress)
        // console.log("fromCord:",fromcord,Object.keys(fromcord).length)
        // console.log("to:",toaddress)
        // console.log("toCord:",tocord,Object.keys(tocord).length)
        

        const changeAddress = (address,type) =>{
            if (type==="from"){
                setFromAddress(address)
            }
            else if(type==="to"){
                setToAddress(address)
            }
        }
        const changeCoordinates = (coordinates,type) =>{
            if (type==="from"){
                setFromCord(coordinates)
            }
            else if(type==="to"){
                setToCord(coordinates)
            }
            // console.log("fromCord:",fromcord)
            // console.log("toCord:",tocord)
            // console.log("types:",typeof fromcord, typeof tocord )
            
            // console.log(Object.keys(fromcord).length,Object.keys(tocord).length)
            // console.log("condition is:",Object.keys(fromcord).length>0&& Object.keys(tocord).length>0)
            // console.log("from lenth:",fromcord.length,"to length",tocord.length)
            // if(fromcord.length>0 && tocord.length>0){
            //     getDistance()
            // }
        }
    
        const getDistance = (e)=> {
            // console.log(Object.keys(fromcord).length,Object.keys(tocord).length)
            // console.log("condition is:",Object.keys(fromcord).length>0&& Object.keys(tocord).length>0)
            if(Object.keys(fromcord).length>0&& Object.keys(tocord).length>0){
                // e.preventDefault()
                var directionsService = new google.maps.DirectionsService();

                var request = {
                    origin: fromcord,
                    destination: tocord,
                    travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
                    unitSystem: google.maps.UnitSystem.METRIC
                }
                

                directionsService.route(request, function (result, status) {
                    if (status === google.maps.DirectionsStatus.OK) {
            
                        //Get distance and time
                        const dist=result.routes[0].legs[0].distance.text
                        // console.log(typeof dist) 
                        
                        setDistance(dist)
            
                    } else {
                        console.log("status:",status)
                }    
                })
            }
        }
        
        //REACT-SELECT TUTORIAL-
        //https://codesandbox.io/s/youthful-drake-wpoqu?file=/src/SelectFunctionalComponent.js
        //DYNAMIC FORMS TUTORIAL-
        //https://github.com/candraKriswinarto/dymanic-form/blob/master/src/App.js
        const handleChangeInput = (id, event) => {
            const newreqproducts = reqproducts.map((product,i) => {
              if(id === i) {
                product[event.target.name] = event.target.value
              }
              return product;
            })
            
            setReqProducts(newreqproducts);
        }

        //dont bother understanding this functions, refer the above 2 links for help
        const handleChangeInput2 = (selectedoption,action) => {
            console.log("selectedoption,action,i:",selectedoption,action)
            const newreqproducts = reqproducts.map((product,i) => {
              if(action.name == i) {
                product["Product"] = selectedoption
              }
              return product;
            })
            console.log("newproduct:",newreqproducts)
            setReqProducts(newreqproducts);
        }
        
          const handleAddFields = (e) => {
              e.preventDefault()
            setReqProducts([...reqproducts, { Product: 0, RequiredQuantity: 0 }])
          }
        
          const handleRemoveFields = (id,event) => {
            //   console.log(id,event)
            event.preventDefault()
            // const values  = [...reqproducts];
            const values= reqproducts.filter((product,i)=> i!==id);
            // console.log("new products:",values)
            // values.splice(values.findIndex(value => value.id === id), 1);
            setReqProducts(values);
          }
        
        
        


        return(       
        <div className="container" id="ShipmentPage" >
        
        <form >
        <div className="form-row">
            <div className="form-group col-md-4">
            <label htmlFor="inputfromDC">From DC</label>
            <input  value={fromDC} className="form-control"type="text" id="inputfromDC" disabled/>
            </div>
            <div className="form-group col-md-4">
            <label htmlFor="inputtoWSLR">To Wholesaler</label>
            <input value={toWSLR} onChange={(event)=>setToWSLR(event.target.value)} className="form-control" type="text" id="inputtoWSLR" />
            </div>
            <div className="form-group col-md-4">
            <label htmlFor="inputcarier">Carrier</label>
            <Select options={options} onChange={(e)=>setCarrier(e)} value={carrier}/>
            {/* <input value={carrier} onChange={(event)=>setCarrier(event.target.value)}className="form-control" type="text" id="inputcarrier" /> */}
            </div>
        
        </div>
        <div className="form-row">
            <div className="form-group col-md-4">
            <label htmlFor="inputFrom">From</label>
            <PlaceInput id="inputFrom" address={fromaddress} changeAddress={changeAddress} changeCoordinates={changeCoordinates} type="from"/>
            </div>
            <div className="form-group col-md-4">
            <label htmlFor="inputTo">To</label>
            <PlaceInput id="inputTo" address={toaddress} changeAddress={changeAddress} changeCoordinates={changeCoordinates} type="to"/>
            </div>
            <div className="form-group col-md-4">
            <label htmlFor="inputDistance">Distance</label>
            <input className="form-control  form-control-sm" value={distance} type="text" id="inputDistance" disabled/>
            </div>
        </div>
        <Divider/>
        
        {reqproducts.map((inputField,i)=> {
            return(
            // following div is only for specifying padding 
            <div style={{padding: '10px 10px 10px 10px'}} key={i} > 
                
            <div className="form-row ProductForm">
               
                <div className="form-group col-md-3">
                <label htmlFor="inputfromDC">Product</label>
                {/* <input value={inputField.Product} onChange={event => handleChangeInput(i, event)} name="Product" className="form-control form-control-sm"type="text" /> */}
                <Select options={productsOptions} onChange={(selectedoption,action,i)=>handleChangeInput2(selectedoption,action,i)} value={reqproducts[i].Product} name={i}/>
                </div>
                <div className="form-group col-md-3">
                <label htmlFor="inputtoWSLR">Required Quantity</label>
                <input value={inputField.RequiredQuantity}  onChange={event => handleChangeInput(i, event)} name="RequiredQuantity" className="form-control form-control-sm" type="number"/>
                </div>
                <div className="form-group col-md-2">
                    <br/>
                    <button disabled={reqproducts.length === 1} className="btn btn-sm btn-danger" onClick={(event) => handleRemoveFields(i,event)}>Remove Product</button>
                </div>
               
            </div>
            </div>
        )})}
        
        <div className="text-center">
        <button className="btn btn-primary btn-sm"  onClick={handleAddFields}>Add Another Product</button>
        </div>
        <Divider/>
        <br/>
        <br/>

        </form>
                
            </div>

        )

    

}

export default ShipmentForm


