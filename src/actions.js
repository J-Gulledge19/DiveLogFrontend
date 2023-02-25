import { redirect } from "react-router-dom"
import url from "./url"


export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newDive = {
        location: formData.get("location"),
        date: formData.get("date"),
        image: formData.get("image"),
        description: formData.get("description")
    }

    // send request to backend
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newDive)
    })

    // redirect back to index page
    return redirect('/')
}


export const updateAction = async ({request, params}) => {
    // get form data
    const formData = await request.formData()

    // get  id
    const id = params.id

    // construct request body
    const updatedDive = {
        location: formData.get("location"),
        date: formData.get("date"),
        image: formData.get("image"),
        description: formData.get("description")
    }

    // send request to backend
    await fetch(`${url}${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedDive)
    })

    // redirect back to show page page
    return redirect(`/show/${params.id}`)
}


export const deleteAction = async ({params}) => {
    // get id
    const id = params.id

    // send request to backend
    await fetch(`${url}${id}/`, {
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/")
}