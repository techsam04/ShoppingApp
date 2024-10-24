import { useEffect, useState, createContext } from "react";
import { json, useNavigate } from "react-router-dom";
useNavigate
export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {


    const [productData, setProductData] = useState({})
    const [loading, setLoading] = useState(true)
    const [productDetails, setProductDetails] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=0', {
            method: 'GET',
        })
            .then((response) => {
                if (!response.ok)
                    throw new Error(response.message)
                return response.json()
            })
            .then((response) => {
                setProductData(response.products)
                setLoading(false)
            })
            .catch((response) => console.log(response));

    }, [])
    
    
    

    function handleAddToCart(getProductDetails) {
        const idxOfItem = cartItems.findIndex(item => item.id === getProductDetails.id)
        let updatedCart

        if (idxOfItem === -1) {
            updatedCart = [...cartItems, { ...getProductDetails, quantity: 1, totalPrice: getProductDetails.price }]
        } else {
            let existingItem = cartItems[idxOfItem]
            existingItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
                totalPrice: existingItem.totalPrice + existingItem.price
            }
            cartItems[idxOfItem] = existingItem
            updatedCart = [...cartItems]
        }
        setCartItems(updatedCart)
        // console.log('handle addto catr:', cartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    function handleRemoveItemFromCart(getCartItem) {
        const idxOfItem = cartItems.findIndex(item => item.id === getCartItem.id)
        cartItems.splice(idxOfItem, 1)
        setCartItems([...cartItems])
        localStorage.removeItem('cartItems')
        localStorage.setItem('cartItems', JSON.stringify(cartItems))

    }

    function handleDecreaseQuantity(getCartItem) {
        const idxOfItem = cartItems.findIndex(item => item.id === getCartItem.id)
        let existingItem = cartItems[idxOfItem]
        if (existingItem.quantity > 1) {
            existingItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1,
                totalPrice: ((existingItem.quantity - 1) * existingItem.price).toFixed(2)
            }

            cartItems[idxOfItem] = existingItem
        }

        setCartItems([...cartItems])
        localStorage.removeItem('cartItems')
        localStorage.setItem('cartItems', JSON.stringify(cartItems))

    }

    function handleIncreaseQuantity(getCartItem) {
        const idxOfItem = cartItems.findIndex(item => item.id === getCartItem.id)
        let existingItem = cartItems[idxOfItem]
        if (existingItem.quantity <= existingItem.minimumOrderQuantity) {
            existingItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
                totalPrice: ((existingItem.quantity + 1) * existingItem.price).toFixed(2)
            }

            cartItems[idxOfItem] = existingItem

        }
        setCartItems([...cartItems])
        localStorage.removeItem('cartItems')
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }

    return (
        <ShoppingCartContext.Provider value={{ productData, loading, setLoading, productDetails, setProductDetails, handleAddToCart, cartItems, setCartItems, handleRemoveItemFromCart, handleDecreaseQuantity, handleIncreaseQuantity }}>{children}</ShoppingCartContext.Provider>
    )

}

export default ShoppingCartProvider;