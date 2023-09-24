'use client'
import Link from 'next/link'
import { useInCart } from '@/store/cart'
const { inCart } = useInCart

import SearchModal from './SearchModal'
import { getAllProducts } from '@/app/layout/info/server'

import { useStoreSearch } from '@/store/search'
const { visibleSearch, products } = useStoreSearch

import { Fragment, useState, useEffect } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
	UserIcon,
	XMarkIcon
} from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/20/solid'

const navigation = {
	phones: [
		{ name: '8 (8314) 23-70-96', href: 'tel:+78314237096' },
		{ name: '8 (902) 303-36-54', href: 'tel:+79023033654' },
		{ name: '8 (930) 688-88-62', href: 'tel:+79306888862' }
	]
}

export default () => {
	const { productsInCart } = inCart()
	const { openVisibleSearch, currentVisibleSearch } = visibleSearch()
	const { setAllProducts, allProducts } = products()

	const handleSearch = async () => {
		// Если продукты ещё не получен, получаем с серверного экшена getAllProducts данные и пишем его в стор Зустанд через метод setAllProducts
		if (allProducts.length < 1) setAllProducts(await getAllProducts())
		openVisibleSearch()
	}

	const [isClient, setIsClient] = useState(false)
	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<div className="bg-white">
			<SearchModal />
			<header className="relative z-10">
				<nav aria-label="Top">
					<div className="bg-white">
						<div className="border-b border-gray-200">
							<div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
								<div className="flex h-14 items-center justify-between">
									<div className="hidden h-full md:flex">
										<Popover.Group className="ml-2">
											<div className="flex h-full justify-center items-center space-x-3">
												{navigation.phones.map((phone) => (
													<div
														key={phone.name}
														className="flex items-center"
													>
														<svg
															className="h-5 w-5 text-red-800 "
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
															viewBox="0 0 24 24"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
														<a
															href={phone.href}
															className="ml-2 items-center text-sm font-display font-medium text-gray-700 hover:text-gray-800"
														>
															{phone.name}
														</a>
													</div>
												))}
											</div>
										</Popover.Group>
									</div>

									{/* Mobile menu and search (lg-) */}

									<div className="md:hidden flex justify-end">
										<PhoneIcon
											className="h-5 w-5 text-red-700"
											aria-hidden="true"
										/>
										<Link
											href="tel:+78314237096"
											className="ml-2 text-base text-gray-800"
										>
											8 (8314) 23-70-96
										</Link>
									</div>

									<div className="flex flex-1 items-center justify-end">
										<div className="flex items-center lg:ml-8">
											<div className="flex space-x-8">
												<button
													// onMouseEnter={() => setIsHovered(true)}
													// onMouseLeave={() => setIsHovered(false)}
													onClick={handleSearch}
													className="-m-2 p-2 text-gray-400 hover:text-gray-500"
												>
													<span className="sr-only">Поиск</span>
													<MagnifyingGlassIcon
														className="h-6 w-6"
														aria-hidden="true"
													/>
												</button>
											</div>

											<span
												className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
												aria-hidden="true"
											/>

											<div className="flow-root">
												<Link
													href="/cart"
													className="group -m-2 flex items-center p-2"
												>
													<ShoppingCartIcon
														className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
														aria-hidden="true"
													/>
													<span className="w-8 ml-2 text-2xl font-medium text-red-800 group-hover:text-gray-800">
														{isClient && productsInCart?.length}
													</span>
													<span className="sr-only">
														количество в корзине
													</span>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	)
}
