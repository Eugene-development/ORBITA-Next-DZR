'use client'

import { useState, useEffect } from 'react'

import { useInCart } from '@/store/cart'
const { inCart } = useInCart

export default function index({ idx, id, name, price, unit }) {
	const [count, setCount] = useState(1)

	const { changeCountLS, removeProduct, setTotalCount } = inCart()

	const handleCount = (newQuantity) => {
		setCount(newQuantity)
		changeCountLS(id, newQuantity)
		setTotalCount(newQuantity)
	}

	const handleRemoveProduct = (id) => {
		removeProduct(id)
		setTotalCount()
	}

	return (
		<>
			{/* mobile */}
			<td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900  sm:w-auto sm:max-w-none sm:pl-6">
				<div className="flex">
					<dt className="sr-only">Номер</dt>
					<dd className="mt-1 mr-2 truncate">{idx + 1}.</dd>
					<dt className="sr-only">Наименование</dt>
					<dd className="mt-1 truncate first-letter:uppercase">{name}</dd>
				</div>

				<dl className="font-normal lg:hidden">
					<dt className="sr-only">Цена</dt>
					<dd className="mt-1 truncate">
						<span className="inline-flex rounded-md bg-cyan-100 px-2 text-xs font-semibold leading-5 text-cyan-900">
							Цена : {price} руб / {unit}
						</span>
					</dd>
					<dt className="sr-only">Цена со скидкой</dt>
					<dd className="mt-1 truncate">
						<span className="inline-flex rounded-md bg-cyan-100 px-2 text-xs font-semibold leading-5 text-cyan-900">
							Cо скидкой 5% : {price - price * 0.05} руб / {unit}
						</span>
					</dd>
					<dt className="sr-only sm:hidden">Количество</dt>
					<dd className="mt-2 mr-20 truncate text-gray-500 sm:hidden">
						<input
							value={count}
							onChange={(e) => handleCount(e.target.value)}
							type="number"
							className="block w-24 rounded-md border-cyan-300 focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
						/>
					</dd>
				</dl>
			</td>

			{/* Desktop */}
			<td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell ">
				<span className="inline-flex rounded-md bg-cyan-100 px-3 py-1 text-sm font-semibold leading-5 text-cyan-900">
					{price} руб / {unit}
				</span>
			</td>
			<td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell ">
				<span className="inline-flex rounded-md bg-cyan-100 px-3 py-1 text-sm font-semibold leading-5 text-cyan-900">
					{Math.ceil(price - price * 0.05)} руб / {unit}
				</span>
			</td>
			<td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
				<input
					value={count}
					min="0"
					onChange={(e) => handleCount(e.target.value)}
					type="number"
					className="block w-24 rounded-md border-cyan-300 focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
				/>
			</td>
			<td className="px-3 py-4 text-sm text-gray-500 w-24">
				<strong>{Math.ceil(price - price * 0.05) * count}</strong> руб.
			</td>
			<td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
				<button
					onClick={() => handleRemoveProduct(id)}
					className="inline-flex items-center rounded-full border border-transparent bg-red-800 p-1.5 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
					type="button"
				>
					<svg
						className="h-4 w-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 18L18 6M6 6l12 12"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						/>
					</svg>
				</button>
			</td>
		</>
	)
}
