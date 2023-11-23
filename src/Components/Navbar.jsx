import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Link to ="/registration"  className="">Registration
        </Link>    
    </div>

  </div>
  <Link to ="/login"  className="btn btn-outline-success me-3">Logout
        </Link>
</nav> 
 )
}

export default Navbar


