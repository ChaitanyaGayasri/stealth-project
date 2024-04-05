//import { useState } from 'react'

import "./App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Dashboard from "./components/Dashboard"
const App = () => {

   return (
   
    <BrowserRouter>
    <Routes>
     <Route exact path="/" element={<Dashboard/>}/>
     
    </Routes>
    </BrowserRouter>

   )
}

export default App
