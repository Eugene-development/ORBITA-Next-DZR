import React from 'react'

export default function index(item) {
	return (
		<tr>
			{/* mobile */}
			<td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900  sm:w-auto sm:max-w-none sm:pl-6">
				. <span className="ml-1 first-letter:uppercase">{item.name}</span>
				<dl className="font-normal lg:hidden">
					<dt className="sr-only">Цена</dt>
					<dd className="mt-1 truncate">
						<span className="inline-flex rounded-md bg-cyan-100 px-2 text-xs font-semibold leading-5 text-cyan-900">
							Цена: {item.price} руб/{item.unit}
						</span>
					</dd>
					<dt className="sr-only">Цена</dt>
					<dd className="mt-1 truncate">
						<span className="inline-flex rounded-md bg-cyan-100 px-2 text-xs font-semibold leading-5 text-cyan-900">
							Цена со скидкой: xxx руб/{item.unit}
						</span>
					</dd>
					<dt className="sr-only sm:hidden">Количество</dt>
					<dd className="mt-2 mr-20 truncate text-gray-500 sm:hidden">
						{/* <InputCount /> */}
					</dd>
				</dl>
			</td>

			{/* Desktop */}
			<td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell ">
				<span className="inline-flex rounded-md bg-cyan-100 px-3 py-1 text-sm font-semibold leading-5 text-cyan-900">
					{item.price} руб/{item.unit}
				</span>
			</td>
			<td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell ">
				<span className="inline-flex rounded-md bg-cyan-100 px-3 py-1 text-sm font-semibold leading-5 text-cyan-900">
					{item.price - item.price * 0.05} руб/{item.unit}
				</span>
			</td>
			<td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
				{/* <InputCount /> */}
			</td>
			<td className="px-3 py-4 text-sm text-gray-500">{item.price - item.price * 0.05}</td>
			<td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
				{/* <button
											on:click={deleteProductFromCart(id)}
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
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
												/>
											</svg>
										</button> */}
			</td>
		</tr>
	)
}
