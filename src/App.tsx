import './App.css'

import {BrowserRouter} from "react-router-dom"

import PublicRoutes from "./routes/PublicRoutes";

export default function App() {

    return (
        <BrowserRouter>
            <PublicRoutes/>
        </BrowserRouter>
    )
}
