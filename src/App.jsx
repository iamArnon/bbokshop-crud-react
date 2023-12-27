import {Routes, BrowserRouter, Route} from "react-router-dom";
import './App.css'
import Home from "./components/Home.jsx";
import Create from "./components/Create.jsx";
import Update from "./components/Update.jsx";
import Read from "./components/Read.jsx";

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/create" element={<Create/>}></Route>
                <Route path="/update/:id" element={<Update/>}></Route>
                <Route path="/read/:id" element={<Read/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
