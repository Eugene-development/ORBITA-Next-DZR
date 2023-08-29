"use client"
import { useInCart } from '@/app/(catalog)/shop/product/store'
const { inCart } = useInCart

export default () => {
	// const { setCurrentProductInCart } = inCart()
	const { productInCart, changeStatusButton } = inCart()

    
  return (
    <button
        type="submit"
        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
    >
        {productInCart ? <span>Товар в корзине</span> : <span>В корзину</span>} 
    </button>
  )
}
