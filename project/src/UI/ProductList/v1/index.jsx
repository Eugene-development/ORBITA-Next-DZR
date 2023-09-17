'use client'
import Link from 'next/link'
import { StarIcon } from '@heroicons/react/20/solid'
import { FadeIn } from '@/hooks/motion/FadeIn'
import Button from './Button'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default ({ category }) => {
	return (
		<div className="bg-white py-16 ">
			<div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8 font-display">
				{/* <h2 className="sr-only">Products</h2> */}

				<div className="flex mb-6" aria-label="Breadcrumb">
					<div className="flex items-center space-x-3 mx-auto">
						<div>
							<Link href="/" className="text-gray-600 hover:text-gray-800">
								<svg
									className="h-4 w-4 flex-shrink-0"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="sr-only">Главная</span>
							</Link>
						</div>

						<div className="hidden sm:flex items-center">
							<svg
								className="h-5 w-5 flex-shrink-0 text-red-700"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
									clipRule="evenodd"
								/>
							</svg>
							<Link
								href={`/shop/rubric/${category.category_one.parent.parent.slug}`}
								className="ml-4 text-sm md:text-lg font-medium text-gray-600 hover:text-gray-800"
							>
								{category.category_one.parent.parent.value}
							</Link>
						</div>

						<div className="flex items-center">
							<svg
								className="h-5 w-5 flex-shrink-0 text-red-700"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
									clipRule="evenodd"
								/>
							</svg>
							<Link
								href={`/shop/category/${category.category_one.parent.slug}`}
								className="ml-4 text-sm md:text-lg font-medium text-gray-600 hover:text-gray-800"
							>
								{category.category_one.parent.value}
							</Link>
						</div>

						<div className="flex items-center">
							<svg
								className="h-5 w-5 flex-shrink-0 text-red-700"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
									clipRule="evenodd"
								/>
							</svg>
						</div>

						{/* <div className="hidden md:block">
							<div className="flex items-center">
								<svg
									className="h-5 w-5 flex-shrink-0 text-red-800"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="ml-4 text-sm md:text-xl font-medium text-gray-800 "
									>{data.category.category_one.value}</span
								>
							</div>
						</div> */}
					</div>
				</div>

				<div className="px-2">
					<div className="mx-auto max-w-5xl text-center">
						{/* <h2 className="text-base font-semibold leading-7 text-red-600">Категория</h2> */}

						<h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
							{category.category_one.value}
						</h1>
					</div>
				</div>
				<p className="mx-auto mt-6  max-w-3xl text-center text-sm sm:text-lg leading-6 text-gray-600">
					Купите товар "{category.category_one.value}" по доступной цене с доставкой или
					самовывозом с нашего склада в Дзержинске
				</p>

				<div className="mt-8 -mx-px mb-16 grid grid-cols-2 border border-gray-100 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
					{category.category_one.product.map(
						({ id, slug, image, value, price, unit }) => (
							<div key={id}>
								<FadeIn>
									<div className="group relative border border-gray-100 p-4 sm:p-6 ">
										<Link href={`/shop/product/${slug}`}>
											<div className="aspect-h-1 aspect-w-1 overflow-hidden group-hover:opacity-75">
												<img
													src={
														image
															? `https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/${image.hash}`
															: 'https://img2.freepng.ru/20181125/wbe/kisspng-apartment-renting-london-residential-house-product-5bfa6d06347989.212131131543138566215.jpg'
													}
													alt={value}
													className="h-full w-full object-contain object-center"
												/>
											</div>
											<div className="pb-4 pt-6 text-center ">
												<h3 className="text-xs sm:text-sm font-medium text-gray-900 hover:text-red-700 first-letter:uppercase h-12">
													<span
														aria-hidden="true"
														className=" inset-0 "
													/>
													{value}
												</h3>
												<div className="mt-3 flex flex-col items-center">
													{/* <p className="sr-only">{product.rating} out of 5 stars</p> */}
													<div className="flex items-center">
														{[0, 1, 2, 3, 4].map((rating) => (
															<StarIcon
																key={rating}
																className={classNames(
																	true
																		? 'text-yellow-400'
																		: 'text-yellow-300',
																	'h-5 w-5 flex-shrink-0'
																)}
																aria-hidden="true"
															/>
														))}
													</div>
													{/* <p className="mt-1 text-sm text-gray-500">
											{product.reviewCount} reviews
										</p> */}
												</div>
												<p className="mt-4 text-base font-medium text-gray-900">
													{price?.value} руб{unit && <span>/</span>}
													{unit?.value}
												</p>
											</div>
										</Link>
										<Button
											productID={id}
											productName={value}
											productPrice={price?.value}
											productUnit={unit?.value}
											productCount="1"
										/>
									</div>
								</FadeIn>
							</div>
						)
					)}
				</div>

				<div>
					<h2 className="mx-auto  py-1 text-xl  tracking-wide text-gray-800">
						<strong className="inline-flex py-1 text-2xl font-semibold tracking-wide text-gray-800">
							{category.category_one.value} со склада в Дзержинске.
						</strong>
						<br />
						<p className="pt-2 text-lg">Наши цены, ассортимент товаров и применение.</p>
					</h2>
				</div>
				{category.category_one.text.map(({ key, value }, index) => (
					<div key={index} className="my-4">
						{key === '1' && (
							<div
								className=" text-gray-500 dark:text-gray-400 prose font-normal"
								dangerouslySetInnerHTML={{ __html: value }}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
