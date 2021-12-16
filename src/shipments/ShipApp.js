// import React, { useState, useEffect} from 'react'
import React from 'react'
import "./Styles/ShipApp.css"
import ShipmentForm from './Components/ShipmentForm'
import {
    Switch, Route
  } from "react-router-dom"




const ShipApp = () => {

        
        return(       
            <Switch>
                <Route exact path="/Shipments">
                    <ShipmentForm/>
                </Route>
            </Switch>
        )
}

export default ShipApp