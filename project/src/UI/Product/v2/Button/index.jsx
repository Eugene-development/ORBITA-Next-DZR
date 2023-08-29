"use client"
import { Fragment, useState, useEffect } from 'react'

import { useInCart } from '@/app/(catalog)/shop/product/store'
const { inCart } = useInCart

export default ({productID}) => {
	const { productsInCart, setCurrentProductInCart } = inCart()
  let isInCart = false
  if (productsInCart.includes(productID)) isInCart = true

  const handleClick = () => {
      if (!productsInCart.includes(productID)) setCurrentProductInCart(productID);
  };

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  return (
    <button
        onClick={handleClick}
        type="button"
        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
    >
        {isClient && isInCart ? <span>Товар в корзине</span> : <span>В корзину</span>} 
    </button>
  )
}
