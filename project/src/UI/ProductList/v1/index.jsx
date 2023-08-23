'use client'
import Link from 'next/link'
import { StarIcon } from '@heroicons/react/20/solid'


function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default ({ category }) => {
	return (
		<div className="bg-white py-16 sm:py-24">
			<div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8 font-display">
				{/* <h2 className="sr-only">Products</h2> */}
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-base font-semibold leading-7 text-red-600">Категория</h2>
					<p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						{category.category_one.value}
					</p>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
					Купите товар "{category.category_one.value}" по доступной цене с доставкой
					или самовывозом с нашего склада в Дзержинске
				</p>

				<div className="mt-8 -mx-px grid grid-cols-2 border-l border-t border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
					{category.category_one.product.map((product) => (
						<div
							key={product.id}
							className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
						>
							<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg group-hover:opacity-75">
								<img
									src={`https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/${product.image.hash}`}
									alt={product.value}
									className="h-full w-full object-contain object-center"
								/>
							</div>
							<div className="pb-4 pt-10 text-center">
								<h3 className="text-sm font-medium text-gray-900">
									<Link href={product.slug}>
										<span aria-hidden="true" className="absolute inset-0" />
										{product.value}
									</Link>
								</h3>
								<div className="mt-3 flex flex-col items-center">
									<p className="sr-only">{product.rating} out of 5 stars</p>
									<div className="flex items-center">
										{[0, 1, 2, 3, 4].map((rating) => (
											<StarIcon
												key={rating}
												className={classNames(
													product.rating > rating
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
									{product.price.value} руб{product.unit && <span>/</span> }{product.unit?.value}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
