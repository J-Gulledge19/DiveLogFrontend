import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import Create from "./pages/Create"
import Update from "./pages/Update"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>}/>
            <Route path="post/:id" element={<Show/>} />
            <Route path="create" element={<Create/>}/>
            <Route path="update/:id" element={<Update/>}/>
            <Route path="delete/:id"/>
        </Route>
    </>
))

export default router