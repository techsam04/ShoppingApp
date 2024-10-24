import { Fragment, useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartProvider"

function SingleCartItem({ singleCartItem }) {

    const{handleRemoveItemFromCart, handleIncreaseQuantity, handleDecreaseQuantity} = useContext(ShoppingCartContext)


    return (
        <Fragment>
        <div className="grid grid-cols-3 items-start gap-5">
            <div className="col-span-2 flex items-start gap-4">
                <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
                    <img src={singleCartItem.thumbnail} className="w-full h-full object-contain" alt={singleCartItem.title} />
                </div>
                <div>
                    <h3 className="text-base font-bold text-gray-900">{singleCartItem.title}</h3>
                    <button onClick={() => handleRemoveItemFromCart(singleCartItem)} className="text-sm px-4 mt-10 py-3 bg-black text-white font-extrabold">Remove</button>
                </div>
            </div>
            <div className="ml-auto">
                <h3 className="text-lg font-bold text-gray-900">${singleCartItem.totalPrice}</h3>
                <div className="mt-3 grid items-center grid-cols-3 gap-2">
                    <button onClick={() => handleDecreaseQuantity(singleCartItem)} className="border border-[#000]" disabled={singleCartItem.quantity === 1}>-</button>
                    <p className="mt-2 mb-3 font-bold text-[16px]">{singleCartItem.quantity}</p>
                    <button onClick={() => handleIncreaseQuantity(singleCartItem)} className="border border-[#000]" disabled={singleCartItem.quantity > singleCartItem.minimumOrderQuantity}>+</button>
                </div>
            </div>
        </div>
        <hr className="border-gray-500"/>
        </Fragment> 

        
    )
    
}

export default SingleCartItem