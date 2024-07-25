/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function ProductSingle({ title, price, location, img, id }) {
    const [liked, setLiked] = React.useState(false);
    const [likedPost, setLikedPosts] = React.useState([]);

    function handleLike(e) {
        console.log(e.target.id, "event");
        // let id = e.target.id
        e.stopPropagation();
        setLiked(!liked);
        // if (liked) {
        //     setLikedPosts(prevState => {
        //         return [...prevState, id]
        //     })
        // }
        // console.log(likedPost)
    }

    return (
        <div className="relative border-2 rounded-md text-lg lg:p-2 transition ease-in-out hover:scale-105 duration-300">
            <Link to={`/product/${id}`} className="cursor-pointer hover:shadow-xl">
                <div className="mb-2">
                    <img src={img} alt="" className="w-full lg:rounded-md" />
                </div>
                <div className="flex justify-between">
                    <div className="text-xl lg:text-base pl-2 font-medium">
                        <p className="">{price}</p>
                        <h1>{title}</h1>
                        <p>{location}</p>
                    </div>
                </div>
            </Link>
            <div
                className="absolute top-2 right-2"
                onClick={(e) => handleLike(e)}
            >
                {!liked ? (
                    <FaRegHeart
                        id={id}
                        className="hover:fill-[#720D96]"
                        cursor={"pointer"}
                    />
                ) : (
                    <FaHeart id={id} color="#720D96" cursor={"pointer"} />
                )}
            </div>
        </div>
    );
}

export default ProductSingle;