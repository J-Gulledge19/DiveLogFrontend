import { Link, useLoaderData, Form } from "react-router-dom"


const Show = () => {
    const dive = useLoaderData()
    console.log(dive)

    return (
        <div className="show-page">
            <h2 className="showTitle">{dive.location}</h2>
            <img className="showImage" src={dive.image} alt={dive.location} />
            
            <h4>Date Visited: {dive.date}</h4>
            <h5>Description:</h5>
            <p>{dive.description}</p>                

            <Link to={`edit/${dive.id}`}>
                <button>Edit</button>
            </Link>
            <Form action={`/delete/${dive.id}`} method="delete">
                <input type="submit" value={`Delete ${dive.location}`} />
            </Form>
        </div>
    )
}

export default Show
