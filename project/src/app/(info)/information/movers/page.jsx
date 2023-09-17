import { ServerIcon } from '@heroicons/react/20/solid'

import { Service } from '@/UI'

const service = {
	title: 'Грузчики',
	description: 'Предлагаем услугу квалифицированных грузчиков, работающих в штате компании.'
}

const features = [
	{
		name: 'Оплата.',
		description:
			'Минимальная цена работ - 500 рублей / 1 грузчик, 1000 рублей / 2 грузчика (листовые материалы).',
		icon: ServerIcon
	},
	{
		name: 'Цены.',
		description:
			'Оплата производится в размере от 10 до 50 рублей за этаж за каждую позицию товара. При наличии лифта производится перерасчёт.',
		icon: ServerIcon
	},
]

export default function page() {
	return <Service features={features} service={service}/>
}
