'use client'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/20/solid'
function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default ({ rubric }) => {
	return (
		<div className="bg-white py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8 font-display">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-base font-semibold leading-7 text-red-600">Рубрика</h2>
					<p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						{rubric.rubric_one.value}
					</p>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
					Купите товар "{rubric.rubric_one.value}" в Дзержинске по низкой цене с доставкой
					или самовывозом с нашего склада
				</p>
				<div className="isolate mx-auto mt-10 lg:mb-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
					{rubric.rubric_one.category.map(({ id, value, slug }) => (
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
										className="text-gray-900 text-lg font-bold leading-8"
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
										123 поз.
									</li>
									<li className="flex gap-x-3">
										<CheckIcon
											className="h-6 w-5 flex-none text-red-600"
											aria-hidden="true"
										/>
										Минимальная цена 322р/шт.
									</li>
								</ul>

							<Link
								href={`/shop/products/${slug}`}
								aria-describedby={id}
								className="text-gray-600 ring-1 ring-inset ring-red-200 hover:ring-red-300 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
							>
								Выбрать
							</Link>
						</div>
					))}
				</div>
				<div>
						<h2 class="mx-auto  py-1 text-xl  tracking-wide text-slate-800">
							<strong className="inline-flex py-1 text-2xl font-semibold tracking-wide text-gray-800"
								>{rubric.rubric_one.value} со склада в Дзержинске.</strong>
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
