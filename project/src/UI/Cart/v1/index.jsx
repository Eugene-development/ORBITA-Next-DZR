import React from 'react'

export default function index() {
	return (
		<>
			{true ? (
				<div className="px-4 sm:px-6 lg:px-8">
					<div className="sm:flex sm:items-center">
						<div className="sm:flex-auto">
							<h1 className="text-2xl font-semibold text-gray-900">Ваша корзина</h1>
							<p className="mt-2 text-sm text-gray-700">
								После отправки заказа с вами свяжется менеджер
							</p>
						</div>
					</div>
					<div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
						<table className="min-w-full divide-y divide-gray-300 bg-gray-50">
							<thead className="">
								<tr>
									<th
										scope="col"
										className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
									>
										Наименование:
									</th>
									<th
										scope="col"
										className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
									>
										Цена:
									</th>
									<th
										scope="col"
										className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
									>
										Цена со скидкой:
									</th>

									<th
										scope="col"
										className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
									>
										Количество:
									</th>
									<th
										scope="col"
										className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>
										Итого:
									</th>
									<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
										<span className="sr-only">Удалить</span>
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								{/* <!-- {#each productsInCart as { id, value, price, unit, img, quantity }, idx} -->
							{#each $prodInCart as { id, value, price, unit, img, quantity }, idx} */}
								<tr>
									<td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900  sm:w-auto sm:max-w-none sm:pl-6">
										. <span className="ml-1 first-letter:uppercase">xxx</span>
										<dl className="font-normal lg:hidden">
											<dt className="sr-only">Цена</dt>
											<dd className="mt-1 truncate">
												<span className="inline-flex rounded-md bg-cyan-100 px-2 text-xs font-semibold leading-5 text-cyan-900">
													Цена: xxx руб/xxx
												</span>
											</dd>
											<dt className="sr-only">Цена</dt>
											<dd className="mt-1 truncate">
												<span className="inline-flex rounded-md bg-cyan-100 px-2 text-xs font-semibold leading-5 text-cyan-900">
													Цена со скидкой: xxx руб/xxx
												</span>
											</dd>
											<dt className="sr-only sm:hidden">Количество</dt>
											<dd className="mt-2 mr-20 truncate text-gray-500 sm:hidden">
												{/* <input
													type="text"
													className="block w-full rounded-md border-cyan-300 pr-8 focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
													bind:value={quantity}
												/> */}
											</dd>
										</dl>
									</td>
									<td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell ">
										<span className="inline-flex rounded-md bg-cyan-100 px-3 py-1 text-sm font-semibold leading-5 text-cyan-900">
											xxx руб/xxx
										</span>
									</td>
									<td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell ">
										<span className="inline-flex rounded-md bg-cyan-100 px-3 py-1 text-sm font-semibold leading-5 text-cyan-900">
											xxx руб/xxxx
										</span>
									</td>
									<td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
										{/* <input
											type="text"
											className="-mr-48 block w-full rounded-md border-cyan-300 pr-16 focus:border-cyan-500 focus:ring-cyan-600 sm:text-sm"
											bind:value={quantity}
										/> */}
									</td>
									<td className="px-3 py-4 text-sm text-gray-500">xxx</td>
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
								{/* {/each} */}
							</tbody>
						</table>
					</div>
				</div>
			) : (
				<div className="m-8">
					<div className="rounded-md bg-blue-50 p-4">
						<div className="flex ">
							<div className="flex-shrink-0">
								<svg
									aria-hidden="true"
									className="h-5 w-5 text-blue-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clip-rule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
										fillRule="evenodd"
									/>
								</svg>
							</div>
							<div className="ml-3 flex-1 md:flex md:justify-between">
								<p className="text-sm text-cyan-700">
									Корзина пуста. Ждём вас снова за покупками.
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
