// import React from 'react'

// import Container from "../components/container/Container";
import ProductGrid from "../components/ProductGrid";
import { ListingsProvider } from "../context/ProductsContext";

function Home() {
    return (
        <div className=" relative lg:flex justify-between">
            <ListingsProvider>
                <div className="w-full">
                    <ProductGrid />
                </div>
            </ListingsProvider>
        </div>
    );
}

export default Home;
