import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Home} from "./survey/pages/home.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <div className={"main__div"}>
          <Home />
      </div>

  </StrictMode>,
)
