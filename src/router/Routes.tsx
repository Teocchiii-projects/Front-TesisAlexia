import {createBrowserRouter, Navigate} from "react-router-dom";

import {Survey} from "../survey/pages/Survey.tsx";
import {Home} from "../public/pages/Home.tsx";
import App from "../App.tsx";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {path:"/Home", element: <Home/>     },
            {path:"/survey", element: <Survey/>},
            {path:"*", element: <Navigate to="/Home"  />}
        ]
    }
])