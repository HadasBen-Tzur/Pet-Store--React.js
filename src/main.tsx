import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.scss'
import { Router } from "./Router";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>  
  </StrictMode>
)
