
import React from "react";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartProvider";
import SingleProduct from "../SingleProduct";

function ProductList(){

    const {productData, loading} = useContext(ShoppingCartContext);
    
    
    
    if (loading) return <h2>Loading please wait...</h2>;
     
     return (
         
      <section className='py-12 bg-white sm:py-16 lg:py-20'>
         <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
             <div className='max-w-md mx-auto text-center'>
                 <h2 className='text-3xl font-extralight text-gray-950 sm:text-4xl'>Our Products</h2>
             </div>
             <div className='grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4'>
                    {
                        productData && productData.length > 0 ? 
                        productData.map(singleProduct => <SingleProduct singleProduct={singleProduct}/>) : <h3>No products found</h3>
                    }

             </div>
         </div>
 
      </section>
         
     )
 
}

export default ProductList