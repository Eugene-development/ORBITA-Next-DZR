'use client'
import { useState, useEffect } from 'react'

import { useInCart } from '@/store/cart'
const { inCart } = useInCart

export default ({ productID, productName, productPrice, productUnit, productCount }) => {
	const { productsInCart, setCurrentProductInCart } = inCart()
	//   let isInCart = false
	//   if (productsInCart?.includes(productID)) isInCart = true

	const handleClick = () => {
		if (!productsInCart?.includes(productID))
			setCurrentProductInCart(productID, productName, productPrice, productUnit, productCount)
	}

	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<>
			{isClient &&
			productsInCart?.some(function (product) {
				return product.id === productID
			})  ? (
				<div className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-900 px-4 py-3 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
					<span>В корзине</span>
				</div>
			) : (
				<button
					onClick={handleClick}
					type="button"
					className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
				>
					<span>В корзину</span>
				</button>
			)}
		</>
	)
}
