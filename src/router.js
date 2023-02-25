import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import { indexLoader, showLoader } from "./loaders"
import Index from "./pages/Index"
import Show from "./pages/Show"
import Create from "./pages/Create"
import Update from "./pages/Update"
import { createAction, deleteAction, updateAction } from "./actions"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>} loader={indexLoader}>
            <Route path="" element={<Index/>}/>
            <Route path="show/:id" element={<Show/>} loader={showLoader} />
            <Route path="create" element={<Create/>} action={createAction}/>
            <Route path="edit/:id" element={<Update/>} loader= {showLoader}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    </>
))

export default router