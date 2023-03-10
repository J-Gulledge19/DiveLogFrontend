import { Link, useLoaderData, Form } from "react-router-dom"


const Show = () => {
    const dive = useLoaderData()
    console.log(dive)

    return (
        <div className="divecard">
            <div className="show-page">
                <h3 className="showTitle">{dive.location}</h3>
                <h4>Date Visited: {dive.date}</h4>
            
                <img className="showImage" src={dive.image} alt={dive.location} />
                <h5>Description:</h5>
                <p>{dive.description}</p>                

                <Link to={`/edit/${dive.id}`}>
                    <button>Edit</button>
                </Link>
                <Form action={`/delete/${dive.id}`} method="delete">
                    <input type="submit" value={`Delete ${dive.location}`} />
                </Form>
                </div>
        </div>
    )
}

export default Show
