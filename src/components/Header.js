import { useLoaderData, Link } from "react-router-dom"

function Header(props) {
  const dive = useLoaderData()
  return (
    <>
      <nav className="nav">
          <h1>My DiveLog</h1>
          <Link to='/'>Home</Link>
          <Link to='/create'> Add New Dive </Link>
      </nav>
      <div className="list"> 
        <h3>Places I've Dived:</h3> 
        {dive.map(dive => (
            <div key={dive._id} className="dive">
            <Link to={`show/${dive.id}`}>
            <h5>{dive.location}</h5><br></br>
            </Link>
            </div>
        ))}
      </div>
    </>

  )
}

export default Header