
const Product = ({pid,name,description}) => {
    return (
        <div className="col-md-4" >
                            <div className="text-center single-content">
                                <i className="fa fa-code"></i>
                                <h4>{name}</h4>
                                <p>
                                     {description}
                                </p>
                                <p>
                                    ID: {pid}
                                </p>
                            </div>    
                        </div>
    )
}

export default Product
