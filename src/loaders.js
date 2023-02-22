import url from "./url";


export const indexLoader = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

export const showLoader = async ({params}) => {
    const response = await fetch(`${url}${params.id}/`)
    const dive = await response.json()
    return dive
}