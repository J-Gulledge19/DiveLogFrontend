import { Link } from "react-router-dom"

function Header(props) {
  return (
      <nav className="nav">
          <Link to='/'>Dive List</Link>
          <Link to='/create'> Add New Dive </Link>
      </nav>
  )
}

export default Header