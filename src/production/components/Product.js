import '../styles/Product.css';
import {
    
    Link
  } from "react-router-dom"
  

const Product = ({id,name,description}) => {

    // const goToDetails= () => {
    //     console.log("go to details")
    //     history.push('/4')
    // }
    return (
        
        <div className="col-md-4 " style={{padding: '10px 10px 20px 10px'}}  >
                        {/* <Router> */}
                        <Link to={`Products/${id}`} style={{ textDecoration: 'none',color: 'black' }} >
                            {/* <div className="text-center single-content" onClick={goToDetails}> */}
                            <div className="text-center single-content product">
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
