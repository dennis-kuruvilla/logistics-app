import Product from "./Product"

const Products = ({products}) => {
    return (
        
        <div>   
            <h3 className="text-center"><strong>Available products:</strong></h3>
            <br/>

            <section id="content-section1" className="content-section1">
                <div className="container">
                    <div className="row" >
                       {products.map(product => 
                            <Product key= {product.id} id={product.id} name={product.name} description={product.description}/>

                       )}
                    </div>
                </div>
            </section>
</div>

 

       
    )
}

export default Products