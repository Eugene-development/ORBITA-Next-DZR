'use client'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/20/solid'
import { FadeIn } from '@/hooks/motion/FadeIn'
import MinPrice from './MinPrice'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default ({ rubric }) => {
	return (
		<div className="bg-white py-16 ">
			<div className="mx-auto max-w-7xl px-6 lg:px-8 font-display">
				<div className="mx-auto max-w-4xl text-center">
					<div className="flex mb-6" aria-label="Breadcrumb">
						<div className="flex items-center space-x-3 mx-auto">
							<div>
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
							</div>

							{/* <div>
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
								href={`/shop/rubric/${category.category_one.parent.parent.slug}`}
								className="ml-4 text-sm md:text-lg font-medium text-gray-600 hover:text-gray-800"
								>{category.category_one.parent.parent.value}</Link>
						</div>
					</div> */}

							<div>
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
										href={`/shop/rubric/${rubric.rubric_one.parent.slug}`}
										className="ml-4 text-sm md:text-lg font-medium  text-gray-600 hover:text-gray-800"
									>
										{rubric.rubric_one.parent.value}
									</Link>
								</div>
							</div>

							<div>
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
					<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						{rubric.rubric_one.value}
					</h1>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-center text-sm sm:text-lg leading-4 text-gray-600">
					У нас вы можете купить категорию товаров "{rubric.rubric_one.value}" по низкой
					цене с доставкой или самовывозом
				</p>
				<FadeIn>
					<div className="isolate mx-auto mt-10 mb-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
						{rubric.rubric_one.category.map(({ id, value, slug, product }) => (
							<div
								key={value}
								className="ring-1 ring-gray-200 rounded-3xl p-6 xl:p-8 content-between "
							>
								{/* <div
											key={value}
											className={classNames(
												item.mostPopular ? 'ring-2 ring-red-600' : 'ring-1 ring-gray-200',
												'rounded-3xl p-6 xl:p-8'
											)}
										> */}
								<div className="h-16">
									<div className="flex items-center justify-between gap-x-4">
										<h2
											id={id}
											className="text-gray-900 text-xl font-bold leading-8"
										>
											{value}
										</h2>
									</div>
									{/* <p className="mt-4 text-sm leading-6 text-gray-600">qqqqq</p> */}
								</div>
								<ul
									role="list"
									className="mt-3 space-y-3 text-sm leading-6 text-gray-600 xl:mt-4"
								>
									<li className="flex gap-x-3">
										<CheckIcon
											className="h-6 w-5 flex-none text-red-600"
											aria-hidden="true"
										/>
										{product.length} поз. товара
									</li>
									<li className="flex gap-x-3">
										<CheckIcon
											className="h-6 w-5 flex-none text-red-600"
											aria-hidden="true"
										/>
										Минимальная цена <MinPrice data={product} /> руб.
									</li>
								</ul>

								<Link
									href={`/shop/products/${slug}`}
									aria-describedby={id}
									className="text-gray-600 ring-1 ring-inset ring-red-200 hover:ring-red-300 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 hover:text-red-700 transition ease-in-out hover:scale-110"
								>
									Выбрать
								</Link>
							</div>
						))}
					</div>
				</FadeIn>
				<div>
					<h2 className="mx-auto  py-1 text-xl  tracking-wide text-slate-800">
						<strong className="inline-flex py-1 text-2xl font-semibold tracking-wide text-gray-800">
							{rubric.rubric_one.value} со склада в Дзержинске.
						</strong>
						<br />
						<p className="pt-2 text-lg">Наши цены, ассортимент товаров и применение.</p>
					</h2>
				</div>
				{rubric.rubric_one.text.map(({ key, value }, index) => (
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
