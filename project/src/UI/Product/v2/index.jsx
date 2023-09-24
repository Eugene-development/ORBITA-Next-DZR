import Link from 'next/link'
import Button from './Button'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/20/solid'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import { FadeIn } from '@/hooks/motion/FadeIn'

const reviews = { average: 5, totalCount: 1624 }

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default ({ product }) => {
	const pr = {
		breadcrumbs: [
			{ id: 1, name: 'Главная', href: '/' },
			{ id: 2, name: product.product_one.parent.value, href: product.product_one.parent.slug }
		]
	}
	return (
		<FadeIn>
			<div className="bg-white">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-6 lg:px-6">
					{/* Product details */}
					<div className="lg:max-w-xl lg:self-end">
						<nav aria-label="Breadcrumb">
							<ol role="list" className="flex items-center space-x-2">
								{pr.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
									<li key={breadcrumb.id}>
										<div className="flex items-center text-sm">
											<Link
												href={`/shop/products/${breadcrumb.href}`}
												className="font-medium text-gray-500 hover:text-gray-900"
											>
												{breadcrumb.name}
											</Link>
											{breadcrumbIdx !== pr.breadcrumbs?.length - 1 ? (
												<svg
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
												>
													<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
												</svg>
											) : null}
										</div>
									</li>
								))}
							</ol>
						</nav>

						<div className="mt-4">
							<h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl first-letter:uppercase">
								{product.product_one.value}
							</h1>
						</div>

						<section aria-labelledby="information-heading" className="mt-4">
							<h2 id="information-heading" className="sr-only">
								Информация о продукте
							</h2>

							<div className="flex items-center">
								<p className="text-sm text-gray-900 sm:text-lg">
									{' '}
									{product.product_one.price.value} &#8381;
									{product.product_one.unit && <span>/</span>}
									{product.product_one.unit?.value}
								</p>

								<div className="ml-4 border-l border-gray-300 pl-4">
									<h2 className="sr-only">Reviews</h2>
									<div className="flex items-center">
										<div>
											<div className="flex items-center">
												{[0, 1, 2, 3, 4].map((rating) => (
													<StarIcon
														key={rating}
														className={classNames(
															reviews.average > rating
																? 'text-yellow-400'
																: 'text-gray-300',
															'h-5 w-5 flex-shrink-0'
														)}
														aria-hidden="true"
													/>
												))}
											</div>
											<p className="sr-only">
												{reviews.average} out of 5 stars
											</p>
										</div>
										{/* <p className="ml-2 text-sm text-gray-500"></p> */}
									</div>
								</div>
							</div>

							<div className="mt-4 space-y-6">
								<div
									className="text-sm text-gray-500"
									dangerouslySetInnerHTML={{
										__html: product.product_one.text[0]?.value || ''
									}}
								/>
							</div>

							<div className="mt-6 flex items-center">
								<CheckIcon
									className="h-5 w-5 flex-shrink-0 text-green-500"
									aria-hidden="true"
								/>
								<p className="ml-2 text-sm text-gray-500">Доставка до объекта</p>
							</div>
							{/* <div className="mt-6 flex items-center">
								<CheckIcon
									className="h-5 w-5 flex-shrink-0 text-green-500"
									aria-hidden="true"
								/>
								<p className="ml-2 text-sm text-gray-500">
									Услуга грузчиков
								</p>
							</div>
							<div className="mt-6 flex items-center">
								<CheckIcon
									className="h-5 w-5 flex-shrink-0 text-green-500"
									aria-hidden="true"
								/>
								<p className="ml-2 text-sm text-gray-500">
									Хранение
								</p>
							</div> */}
						</section>
					</div>

					{/* Product image */}
					<div className="mt-1 md:mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
						<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
							<img
								src={
									product.product_one.image
										? `https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/${product.product_one.image.hash}`
										: 'https://img2.freepng.ru/20181125/wbe/kisspng-apartment-renting-london-residential-house-product-5bfa6d06347989.212131131543138566215.jpg'
								}
								alt={product.product_one.value}
								className="h-full w-full object-contain object-center"
							/>
						</div>
					</div>

					{/* Product form */}
					<div className="mt-1 md:mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
						<section aria-labelledby="options-heading">
							<h2 id="options-heading" className="sr-only">
								Payment options
							</h2>

							<form>
								<div className="sm:flex sm:justify-between">
									{/* Size selector */}
									{/* <div className="block text-sm font-medium text-gray-700">Оплата</div> */}
									<div className="mt-1 grid gap-4 grid-cols-7">
										<div>
											<img
												src="https://design.megagroup.ru/static/design2018/img/payment-methods/mir_z1.png"
												alt=""
												className="h-12 w-full object-contain object-center"
											/>
										</div>
										<div>
											<img
												src="https://design.megagroup.ru/static/design2018/img/payment-methods/visa_z1.png"
												alt=""
												className="h-12 w-full object-contain object-center"
											/>
										</div>
										<div>
											<img
												src="https://design.megagroup.ru/static/design2018/img/payment-methods/master_z1.png"
												alt=""
												className="h-12 w-full object-contain object-center"
											/>
										</div>
										<div>
											<img
												src="https://design.megagroup.ru/static/design2018/img/payment-methods/u_z1.png"
												alt=""
												className="h-12 w-full object-contain object-center"
											/>
										</div>
										<div>
											<img
												src="https://design.megagroup.ru/static/design2018/img/payment-methods/sbp_z1.png"
												alt=""
												className="h-12 w-full object-contain object-center"
											/>
										</div>
										<div>
											<img
												src="https://design.megagroup.ru/static/design2018/img/payment-methods/qr_z1.png"
												alt=""
												className="h-12 w-full object-contain object-center"
											/>
										</div>
										<div>
											<img
												src="https://design.megagroup.ru/static/design2018/img/payment-methods/check_z1.png"
												alt=""
												className="h-12 w-full object-contain object-center"
											/>
										</div>
									</div>
								</div>
								{/* <div className="mt-4">
										<a href="#" className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
										<span>What size should I buy?</span>
										<QuestionMarkCircleIcon
											className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
											aria-hidden="true"
										/>
										</a>
									</div> */}
								<div className="mt-10">
									<Button
										productID={product.product_one.id}
										productName={product.product_one.value}
										productPrice={product.product_one.price.value}
										productUnit={product.product_one.unit.value}
									/>
								</div>
								<div className="mt-6 text-center">
									<div className="group inline-flex text-base font-medium">
										<ShieldCheckIcon
											className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
											aria-hidden="true"
										/>
										<span className="text-gray-500 hover:text-gray-700">
											Услуга ответственного хранения
										</span>
									</div>
								</div>
							</form>
						</section>
					</div>
				</div>
			</div>
		</FadeIn>
	)
}
