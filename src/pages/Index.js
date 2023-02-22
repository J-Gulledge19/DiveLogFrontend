import { useLoaderData, Link } from "react-router-dom"

function Index(props) {
    const dive = useLoaderData()

    return (
      <div>  
        {dive.map(dive => (
      <div key={dive._id} className="dive">
        <h3>{dive.location}</h3>
        <Link to={`/${dive._id}`}>
        <img src={dive.image} alt={dive.location} />
        </Link>
        
        {/* <h3>Origin: {dive.countryOfOrigin}</h3> */}
      </div>
        ))}
      </div>
    )
  }
  
  export default Index