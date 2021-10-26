import Product from "./Product"

const Products = ({products}) => {
    return (
        <div>   
            <h3>Available products:</h3>
            <br/>

            <section id="content-section1" className="content-section1">
                <div className="container">
                    <div className="row">
                       {products.map(product => 
                            <Product key= {product.pid} pid={product.pid} name={product.name} description={product.description}/>

                       )}
                    </div>
                </div>
            </section>
</div>
 

       
    )
}

export default Products