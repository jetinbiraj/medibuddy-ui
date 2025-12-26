import {Route, Routes} from "react-router-dom";
import LandingPage from "../components/LandingPage.tsx";

export default function PublicRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
        </Routes>
    )
}