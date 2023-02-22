import { Form } from "react-router-dom"

function Create(props) {

    return (
        <div className="form-page">
            <h2>New Dive Experience</h2><br/>
            <Form action="/create" method="post">
                
                    <textarea type="input" name="location" placeholder="Location" /><br/>
                
                    <textarea type="input" name="date" placeholder="Date"/><br/>
                
                    <textarea type="input" name="image" placeholder="Image"/><br/>
                
                    <textarea type="input" name="description" placeholder="Description"/><br/>
                <input type="submit" value="Add Dive" />
            </Form>
        </div>
    )
}

export default Create