import { Form, useLoaderData } from "react-router-dom"

function Update(props) {
    const dive = useLoaderData()

    return (
        <div className="divecard">
            <div className="form-page">
                <h2>Update {dive.location}</h2>
            
                <Form action={`/update/${dive.id}`} method="post">
                    <h4>Location:</h4>
                    <textarea type="input" name="location" defaultValue={dive.location} /><br/>
                    <h4>Date:</h4>
                    <textarea type="input" name="date" defaultValue={dive.date} /   ><br/>
                    <h4>Image:</h4>
                    <textarea type="input" name="image" defaultValue={dive.image} /><br/>
                    <h4>Description:</h4>
                    <textarea type="directions" name="description" defaultValue=    {dive.description} /><br/>
                    <input type="submit" value="Update Dive" />
                </Form>
            </div>
        </div>
    )
}

export default Update