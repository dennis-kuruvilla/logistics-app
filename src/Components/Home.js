import React from "react"
import {
    Switch, Route
  } from "react-router-dom"
import "../Styles/Home.css"

const Home = () => {

    return (
        <React.Fragment>
        <Switch>
            <Route exact path="/">

            
            <br/>
            <br/>

            <div className="container " id="Home">
                <h1 id="heading">Welcome to EZ-Chain</h1>
                <br/>
                <p>This is a Supply Chain Application which has a front-end developed with React, running on a Node server. This app consists of 2 sub apps- Product Management and Shipment Maintenence. The Product Management portal makes
                    use of a REST API created with Express. Whereas the Shipments portal makes use of a GraphQL server, and it makes server calls in the form of queries.
                    </p><p>The Product Management portal allows the DC/Manufacturing center to keep track of their products, like keep record of the kind of products they have, and currently available quantity of that product.
                    The Shipments portal is used to create and maintain shipments which are requested by the wholesalers. When a wholesaler makes an order, a shipemt is created which then delivers the required products to the 
                    requesting wholesaler. The shipments app makes use of Google Maps API's to get the cordinates, distance and the places along the way of a shipment </p>
                    <p>Link to Github Repository: <a  href="https://github.com/dennis-kuruvilla/logistics-app">Front-end</a>  ,
                    <a href="https://github.com/dennis-kuruvilla/logistics-rest-api">REST API</a></p>
            </div>
            </Route>
        </Switch>
        </React.Fragment>
    )
}

export default Home