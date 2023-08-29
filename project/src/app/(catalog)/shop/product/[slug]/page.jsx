// 'use client'

import { Product } from '@/UI'
import { getOneProduct } from '../server'
// import { useInCart } from '../store'
// const { inCart } = useInCart


export default async ({ params }) => {
	const product = await getOneProduct(params)
	// const { setCurrentProductInCart } = inCart()

	return <Product product={product} />
}
