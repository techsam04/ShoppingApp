import { ShoppingCartContext } from "../../context/ShoppingCartProvider"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
function ProductDetails() {

    const {  productDetails, setProductDetails, handleAddToCart } = useContext(ShoppingCartContext)
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [secondaryImage, setSecondaryImage] = useState(null)
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(response => { return response.json() })
            .then(response => { setProductDetails(response); setLoading(false); setSecondaryImage(response.thumbnail); })
            .catch(error => {console.error(error); setLoading(true)})
    }, [id])
    if (loading) {
        return <h2>Loading please wait...</h2>
    }

    

    function handleSecondaryImages(image){
        setSecondaryImage(image)
    }

    return (
        <div>
            <div className="p-6 lg:max-7xl max-w-4xl mx-auto">
                <div className="grid items-center  grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">

                        <div className="px-4 py-10 rounded-xl shadow-lg relative">
                            <img className="w-3/4 rounded object-cover" src={secondaryImage} alt={productDetails.title}/>
                        </div>
                        <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                            {
                                productDetails.images.length ?
                                    productDetails.images.map(imageItem =>
                                        <div className="rounded-xl p-4 shadow-md" key={imageItem}>
                                            <img onClick={() => handleSecondaryImages(imageItem)} className="w-24 h-35 cursor-pointer" src={imageItem} alt='secondary images' />
                                        </div>
                                    ) : null
                            }
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-[#333333]">
                            {productDetails.title}
                        </h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-md">{productDetails.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-xl font-bold">${productDetails.price}</p>
                        </div>
                        <div>
                            <button onClick={() => handleAddToCart(productDetails)} className="mt-5 min-w-[200px] px-4 py-3 border-[#333] bg-transparent text-sm font-semibold rounded">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails