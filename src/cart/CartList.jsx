import { useContext, useEffect } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartProvider"
import { useNavigate } from "react-router-dom"
import SingleCartItem from "./singleCartItem"

function CartList(){

    const {cartItems, setCartItems} = useContext(ShoppingCartContext)
    
    const navigate = useNavigate()
    useEffect(() => {const savedCart = localStorage.getItem('cartItems');
        
        
        if (savedCart) {
            setCartItems(JSON.parse(savedCart))
            
        }
},[])

    const calculateTotal = () => {
        return cartItems.reduce((total,item) => total + item.price * item.quantity, 0).toFixed(2)
    }

    return (
        <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
            <h1 className="text-2xl font-bold text-gray-800 text-center">My Cart</h1>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="md:col-span-2 space-y-4">
                    {
                        cartItems.length ? cartItems.map(cartItem => <SingleCartItem singleCartItem={cartItem}/>): <h2>No cart Items</h2>
                    }
                </div>
                <div className="bg-gray-100 rounded-sm p-4 h-max">
                    <h3 className="text-xl font-extrabold text-gray-950 border-b bordre-gray-300 pb-2">Order Summary</h3>
                    <ul className="text-gray-700 mt-4 space-y-2">
                        <p className="flex flex-wrap gap-4 text-sm font-bold">
                            Total <span>
                              ${calculateTotal()}
                            </span>
                        </p>
                    </ul>
                    <div className="mt-5 flex gap-5 space-y-2">
                        <button className="text-sm px-4 py-3 bg-black text-white font-extrabold">Checkout</button>
                        <button onClick={() => navigate('/products')} className="text-sm px-4 py-3 bg-black text-white font-extrabold">Continue Shopping</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartList