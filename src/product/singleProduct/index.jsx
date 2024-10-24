import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartProvider";



function SingleProduct({singleProduct}) {

    
    const navigate = useNavigate()
    

    function handleNavigateToProductDetails(getId){
        
        navigate(`/product-details/${getId}`)
    }

    return (
        <div className="relative group border border-cyan-700 p-6 cursor-pointer">
           <div className="overflow-hidden aspect-w-1 aspect-h-1">
                <img src={singleProduct.thumbnail} onClick={() => handleNavigateToProductDetails(singleProduct.id)} alt={singleProduct.title} className="object-cover w-full h-full transistion-all duration-300 group-hover:scale-125"/>
           </div>
           <div className="flex items-start justify-between mt-4 space-x-4">
                <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
                    <p className="w-[100w] overflow-hidden text-ellipsis whitespace">{singleProduct.title}</p>
                </div>
                <div className="text-right">
                    <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">${singleProduct.price}</p>
                </div>
           </div>
           <button onClick={() => handleNavigateToProductDetails(singleProduct.id)} className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg">view details</button>
        </div>

    )
}

export default SingleProduct