// import React from "react";

import { useContext } from "react";
import { ListingsContext } from "../context/ProductsContext";
import { useParams } from "react-router-dom";

function ProductInfo() {
    const { listings } = useContext(ListingsContext);
    const { productId } = useParams();
    const product = listings.find((e) => e.id === Number(productId));

    return (
        <div className="md:flex-1 px-2">
            <div className="md:pl-10 lg:pl-0 2xl:pl-10">
                <h1 className="font-semibold text-3xl xl:text-3xl mb-2">
                    {product.title}
                </h1>
                <p className="text-[#720D96] text-3xl xl:text-2xl font-semibold mb-2">
                    {product.price}
                </p>
                <div className="flex items-center gap-3 font-semibold text-2xl">
                    <span>Package:</span>
                    <p className="">
                        {product.package}
                    </p>
                </div>
                <div className="flex items-center gap-3 font-semibold text-2xl">
                    <span>KG:</span>
                    <p className="">{product.kg}</p>
                </div>
                <div className="flex items-center gap-3 font-semibold text-2xl">
                    <span>Category:</span>
                    <p className="">{product.category}</p>
                </div>
                
            </div>
        </div>
    );
}

export default ProductInfo;
