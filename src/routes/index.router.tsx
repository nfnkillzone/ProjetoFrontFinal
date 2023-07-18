import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Carrinho from "../pages/Carrinho";
import Product from "../pages/Product";
import Register from "../pages/Register";
export default function Router(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/carrinho" element={<Carrinho/>}/>
            </Routes>
        </BrowserRouter>
    )
}