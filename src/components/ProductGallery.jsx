// import React from "react";
// import SingleListingContext from "../../context/SingleListingContext";
// import Zoom from "react-medium-image-zoom";
// import "react-medium-image-zoom/dist/styles.css";
import { useContext } from "react";
// import image1 from "../assets/image1.png";
import { ListingsContext } from "../context/ProductsContext";
import { useParams } from "react-router-dom";

function ProductGallery() {
    const {listings} = useContext(ListingsContext)
    const {productId} = useParams()
    const product = listings.find((e) => e.id === Number(productId))

    return (
        <div className="md:flex-1 2xl:flex-none 2xl:w-2/3">
            <div className="w-full lg:w-[80%] 2xl:w-full 2xl:flex flex-row-reverse mx-auto py-5 md:py-0">
                <div
                    className="mb-5 w-full"
                    id="main-image"
                >
                    <img
                        src={product.image}
                        alt="product image"
                        className="rounded-md w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductGallery;
