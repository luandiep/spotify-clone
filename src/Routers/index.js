import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import App from "../App";
import PlaylistId from "../Layouts/Player/PlaylistId";

const Routers= createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path:'playlist/:id',
                element:<PlaylistId/>
            }
        ]
        
    }
])

export default Routers;