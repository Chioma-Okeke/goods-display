// import React from "react";
import Container from "../components/Container";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductHeader from "../components/ProductHeader";
import { ListingsProvider } from "../context/ProductsContext";

function SingleListing() {
    return (
        <Container className="">
            <ListingsProvider>
                <ProductHeader />
                <div className="flex w-full min-h-[100vh] flex-col md:flex-row md:py-8">
                    <ProductGallery />
                    <ProductInfo />
                </div>
            </ListingsProvider>
        </Container>
    );
}

export default SingleListing;
