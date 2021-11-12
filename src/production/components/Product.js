import {
    BrowserRouter as Router,
    Switch, Route, Link,  useHistory
  } from "react-router-dom"
  
  const linkStyle = {
    
  };

const Product = ({id,name,description}) => {

    const history = useHistory()

    // const goToDetails= () => {
    //     console.log("go to details")
    //     history.push('/4')
    // }
    return (
        
        <div className="col-md-4" >
                        {/* <Router> */}
                        <Link to={`/${id}`} style={linkStyle}>
                            {/* <div className="text-center single-content" onClick={goToDetails}> */}
                            <div className="text-center single-content">
                                <i className="fa fa-code"></i>
                                <h4>{name}</h4>
                                <p>
                                     {description}
                                </p>
                                <p>
                                    ID: {id}
                                </p>
                            </div> 
                        </Link>
                        {/* </Router>        */}
                        </div>
        
    )
}

export default Product
