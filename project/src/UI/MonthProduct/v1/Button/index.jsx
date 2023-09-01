'use client'
import { useState, useEffect } from 'react'

import { useInCart } from '@/app/(catalog)/shop/product/store'
const { inCart } = useInCart

export default ({ productID }) => {
	const { productsInCart, setCurrentProductInCart } = inCart()

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
				<div className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 px-8 py-1 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50">
					<span>Товар в корзине</span>
				</div>
			) : (
				<button
					onClick={handleClick}
					type="button"
					className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 px-8 py-1 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
				>
					<span>В корзину</span>
				</button>
			)}
		</>
	)
}
