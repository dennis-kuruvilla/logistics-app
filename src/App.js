import React from "react";
import MainNavbar from "./Components/MainNavbar";
import ProdApp from "./production/ProdApp";
import ShipApp from "./shipments/ShipApp";

import scriptLoader from 'react-async-script-loader'

const App = ({isScriptLoaded,isScriptLoadSucceed}) => {

   
    if(isScriptLoaded && isScriptLoadSucceed){ 
        return(
            <React.Fragment>
            <MainNavbar/>
            <ProdApp/>
            <ShipApp/>
            </React.Fragment>
        )
    }
    else{
        return(<div></div>)
    }


}
export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&libraries=places`])(App)