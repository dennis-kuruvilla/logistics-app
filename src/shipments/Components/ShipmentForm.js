import React, { useState, useEffect} from 'react'
import PlaceInput from "./PlaceInput"
import Select from 'react-select'


const ShipmentForm = () =>{

    const [fromaddress,setFromAddress] = useState('')
        const [toaddress,setToAddress] = useState('')
        const [fromcord,setFromCord] = useState({})
        const [tocord,setToCord] = useState({})
        const [distance,setDistance] = useState('')
        const [fromDC,setFromDC] = useState('EZ-Ship WareHouse')
        const [toWSLR,setToWSLR] = useState('')
        const [carrier,setCarrier] = useState('')
        


        useEffect(() => {
            getDistance()    
              // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [fromcord,tocord])

        const google = window.google;
        
        console.log("carrier:",carrier)
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
        
        


        return(       
        <div className="container" id="ShipmentPage">
        
        <form >
        <div className="form-row">
            <div className="form-group col-md-4">
            <label htmlFor="inputfromDC">From DC</label>
            <input  value={fromDC} className="form-control"type="text" id="inputfromDC" disabled/>
            </div>
            <div className="form-group col-md-4">
            <label htmlFor="inputtoWSLR">To Wholesaler</label>
            <input className="form-control" type="text" id="inputtoWSLR" />
            </div>
            <div className="form-group col-md-4">
            <label htmlFor="inputcarier">Carrier</label>
            <input value={carrier} onChange={(event)=>setCarrier(event.target.value)}className="form-control" type="text" id="inputcarrier" />
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
        
        {/* <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>
        <div className="form-group">
            <label htmlFor="inputAddress2">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
                <option >Choose...</option>
                <option>...</option>
            </select>
            </div>
            <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip"/>
            </div>
        </div>
        <div className="form-group">
            <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" htmlFor="gridCheck">
                Check me out
            </label>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button> */}
        </form>
                
            </div>

        )

    

}

export default ShipmentForm