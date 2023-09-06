'use client'
import { useState } from 'react'

export default function index(prop) {
	const [products] = useState(prop.data)

	const getMinPrice = () => {
		const prices = products.map((product) => product.price.value)
		return Math.min(...prices)
	}

	const minValue = getMinPrice()

	return <>{minValue}</>
}
