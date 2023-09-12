import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>  
        <br/>
        <Link to="/posts">Posts</Link> 
        <br/>

        <Link to="/about">About</Link>  
    </nav>
  )
}

export default NavBar