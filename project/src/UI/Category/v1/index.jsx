'use client'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const frequencies = [
	{ value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
	{ value: 'annually', label: 'Annually', priceSuffix: '/year' }
]
const tiers = [
	{
		name: 'Доска обрезная обработанная',
		id: 'tier-freelancer',
		href: '#',
		price: { monthly: '$15', annually: '$144' },
		description: 'The essentials to provide your best work for clients.',
		features: [
			'5 products',
			'Up to 1,000 subscribers',
			'Basic analytics',
			'48-hour support response time'
		],
		mostPopular: false
	},
	{
		name: 'Доска обрезная обработанная',
		id: 'tier-startup',
		href: '#',
		price: { monthly: '$30', annually: '$288' },
		description: 'A plan that scales with your rapidly growing business.',
		features: ['25 поз. товара', 'Оптовикам скидки', 'Нал и безнал', 'Доставка'],
		mostPopular: false
	},
	{
		name: 'Enterprise',
		id: 'tier-enterprise',
		href: '#',
		price: { monthly: '$60', annually: '$576' },
		description: 'Dedicated support and infrastructure for your company.',
		features: [
			'Unlimited products',
			'Unlimited subscribers',
			'Advanced analytics',
			'1-hour, dedicated support response time',
			'Marketing automations',
			'Custom reporting tools'
		],
		mostPopular: false
	}
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Example({ rubric }) {
	const [frequency, setFrequency] = useState(frequencies[0])

	return (
		<div className="bg-white py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8 font-display">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-base font-semibold leading-7 text-red-600">Категория</h2>
					<p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						{rubric.rubric_one.value}
					</p>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
					Купите товар "{rubric.rubric_one.value}" в Дзержинске по низкой цене с доставкой или
				самовывозом с нашего склада
				</p>
				<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{rubric.rubric_one.category.map((tier) => (
						<div
							key={tier.id}
							className={classNames(
								tier.mostPopular ? 'ring-2 ring-red-600' : 'ring-1 ring-gray-200',
								'rounded-3xl p-6 xl:p-8'
							)}
						>
							<div className="flex items-center justify-between gap-x-4">
								<h2
									id={tier.id}
									className={classNames(
										tier.mostPopular ? 'text-red-600' : 'text-gray-900',
										'text-sm font-bold leading-8'
									)}
								>
									{tier.value}
								</h2>
								{/* {tier.mostPopular ? (
                  <p className="rounded-full bg-red-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-red-600">
                    Most popular
                  </p>
                ) : null} */}
							</div>
							{/* <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p> */}
							{/* <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[frequency.value]}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
              </p> */}
							<a
								href={tier.href}
								aria-describedby={tier.id}
								className={classNames(
									tier.mostPopular
										? 'bg-red-600 text-white shadow-sm hover:bg-red-500'
										: 'text-red-600 ring-1 ring-inset ring-red-200 hover:ring-red-300',
									'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
								)}
							>
								Выбрать
							</a>
							<ul
								role="list"
								className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
							>
								{/* {tier.features.map((feature) => (
									<li key={feature} className="flex gap-x-3">
										<CheckIcon
											className="h-6 w-5 flex-none text-red-600"
											aria-hidden="true"
										/>
										{feature}
									</li>
								))} */}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
