
const Product = ({name,description}) => {
    return (
        <div className="col-md-4">
                            <div className="text-center single-content">
                                <i className="fa fa-code"></i>
                                <h3>{name}</h3>
                                <p>
                                     {description}
                                </p>
                            </div>    
                        </div>
    )
}

