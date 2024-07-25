// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Product from "./page/Product";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/product" element={<Product />}>
                    <Route path=":productId" element={<Product />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
