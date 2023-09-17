import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FadeIn } from '@/hooks/motion/FadeIn'

export default ({ catalog }) => {
	return (
		<section className="bg-white dark:bg-gray-900 py-16 ">
			<div className="px-4 mx-auto max-w-screen-xl lg:px-6 font-display">
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
						</div>
					</div>

					<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						{catalog.catalog_one.value}
					</h1>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-center text-sm sm:text-lg leading-6 text-gray-600">
					Купите с нашего склада категорию товаров "{catalog.catalog_one.value}" по низкой
					цене с доставкой или самовывозом своим транспортом
				</p>
				<FadeIn>
					<div className="grid gap-8 my-12 mb-16 md:grid-cols-2">
						{catalog.catalog_one.rubric.map((item) => (
							<Link key={item.value} href={`/shop/category/${item.slug}`}>
								<div className="items-center  rounded-lg sm:flex dark:bg-gray-800 dark:border-gray-700 shadow-lg transition ease-in-out hover:scale-105">
									<img
										className="hidden lg:block w-36 p-4 rounded-lg sm:rounded-none sm:rounded-l-lg"
										src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/logo/logo.png"
										alt="Bonnie Avatar"
									/>

									<div className="p-5">
										<h3 className="flex text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-red-700 ">
											<span>
												{item.value} (
												<span className="text-lg">
													{item.category.length}
												</span>
												)
											</span>
											<ChevronDownIcon
												className="h-4 w-4 mt-0.5 flex-none text-red-800"
												aria-hidden="true"
											/>
										</h3>
										{/* <div className="flex mt-1">
										<span className="text-gray-500 dark:text-gray-400">
											{item.category.length} 
										</span>
										<ChevronDownIcon
											className="h-5 w-5 m-0.5 flex-none text-red-800"
											aria-hidden="true"
										/>
									</div> */}

										<p className="mt-4 mb-4 font-light text-gray-500 dark:text-gray-400">
											Ознакомьтесь с нашими предложениями строительных
											материалов из этой рубрики
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</FadeIn>
				<div>
					<h2 className="inline-flex py-1 text-2xl font-semibold tracking-wide text-gray-800">
						{catalog.catalog_one.value}. Цены, описание и применение.
					</h2>
				</div>
				<div
					className="my-8 text-gray-500 dark:text-gray-400 prose font-normal"
					dangerouslySetInnerHTML={{ __html: catalog.catalog_one.text[0].value }}
				/>
			</div>
		</section>
	)
}
