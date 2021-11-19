import {
    Link
  } from "react-router-dom"
const Navbar = () => {

    return (

        <nav className="navbar navbar-light" style={{backgroundColor: " #d1e0e0"}}>
             <Link to="/" className="navbar-brand mx-auto"><h2><strong>Product Management</strong></h2></Link>
        </nav>

    )
}

export default Navbar