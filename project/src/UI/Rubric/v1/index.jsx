import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default ({ catalog }) => {
	return (
		<section className="bg-white dark:bg-gray-900 py-16 sm:py-24">
			<div className="px-4 mx-auto max-w-screen-xl lg:px-6 font-display">
				<div className="mx-auto max-w-4xl text-center">
					<span className="text-base font-semibold leading-7 text-red-600">
						Раздел каталога
					</span>
					<h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						{catalog.catalog_one.value}
					</h1>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
					Купите с нашего склада в Дзержинске товар "{catalog.catalog_one.value}" по
					низкой цене и с доставкой или самовывозом своим транспортом
				</p>
				<div className="grid gap-8 my-12 lg:mb-16 md:grid-cols-2">
					{catalog.catalog_one.rubric.map((item) => (
						<Link key={item.value} href={`/shop/category/${item.slug}`}>
							<div className="items-center  rounded-lg sm:flex dark:bg-gray-800 dark:border-gray-700 shadow-lg">
								<img
									className="hidden lg:block w-36 p-4 rounded-lg sm:rounded-none sm:rounded-l-lg"
									src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/logo/logo.png"
									alt="Bonnie Avatar"
								/>

								<div className="p-5">
									<h3 className="flex text-xl font-bold tracking-tight text-gray-900 dark:text-white">
										<span>
											{item.value} ({item.category.length}){' '}
										</span>
										<ChevronDownIcon
											className="h-5 w-5  flex-none text-red-800"
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
										Bonnie drives the technical strategy of the flowbite
										platform and brand.
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>
				<div>
							<h2 className="inline-flex py-1 text-2xl font-semibold tracking-wide text-slate-800">
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
