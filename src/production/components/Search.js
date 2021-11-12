import React, { useState } from 'react'
const Search = (products) => {

    const [text, setText] = useState('') 

    // console.log(text)

    // console.log("type:",typeof products.products, "products:",products.products)
    
    const onChangeHandler = (event) => {
        setText(event.target.value)

        let matches = []
        if (text.length>0) {
            matches = products.products.filter(product=> {
                const regex = new RegExp(`${text}`,"gi");
                return product.name.match(regex)
            })
            console.log("matches:",matches)
        }
    }

    return (

        <div className="container text-center">
            <h3><strong>Search for a product:</strong></h3>
                <input type="text" className="col-md-6 input" value={text} onChange={onChangeHandler}/>

            {/* <div className="cool-md-6">hi</div> */}
        </div>
    )
}

export default Search