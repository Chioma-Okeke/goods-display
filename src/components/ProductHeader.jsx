import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function ProductHeader() {
    const [mouseEnter, setMouseEnter] = React.useState(false);

    return (
        <div className="flex items-center justify-between p-3 border-b">
            <Link
                to={"/"}
                className="flex items-center gap-2 cursor-pointer"
                onMouseEnter={() => setMouseEnter(true)}
                onMouseLeave={() => setMouseEnter(false)}
            >
                <IoMdArrowBack
                    size={35}
                    className={`${
                        mouseEnter
                            ? "transition ease-in-out w-8 duration-500"
                            : ""
                    }`}
                />
                <p className="text-2xl">Back</p>
            </Link>
        </div>
    );
}

export default ProductHeader;
