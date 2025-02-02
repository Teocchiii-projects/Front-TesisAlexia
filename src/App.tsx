import './App.css'
import {Outlet} from "react-router-dom";
import Card from "@mui/material/Card";
import {CardContent} from "@mui/material";

function App() {
  return (
    <>
        <Card>
            <CardContent>
                <Outlet/>
            </CardContent>
        </Card>

    </>
  )
}

export default App