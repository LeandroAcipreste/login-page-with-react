import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/login";
import Home from "./pages/home";

const routes = [
    {
        path:"/", element:<Login/>
    },
    {
        path:"/home", element:<Home/>
    }
]


export default function AppRouter(){

    return(
        <Router>
            <Routes>
                {routes.map(({path , element}, index) =>(
                    <Route key={index} path={path} element={element}/>
                ))}
            </Routes>
        </Router>
    );
};