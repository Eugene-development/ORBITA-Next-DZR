'use client'
import { useState, useEffect } from 'react'

import { useInCart } from '@/app/(catalog)/shop/product/store'
const { inCart } = useInCart

export default ({ productID }) => {
	const { productsInCart, setCurrentProductInCart } = inCart()
	//   let isInCart = false
	//   if (productsInCart.includes(productID)) isInCart = true

	const handleClick = () => {
		if (!productsInCart.includes(productID)) setCurrentProductInCart(productID)
	}


	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<>
			{isClient && productsInCart.includes(productID) ? (
				<div				
					className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-800 px-8 py-3 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
				>
					<span>Товар в корзине</span>
				</div>
			) : (
				<button
					onClick={handleClick}
					type="button"
					className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
				>
					<span>В корзину</span>
				</button>
			)}
		</>
	)
}
