import { ServerIcon } from '@heroicons/react/20/solid'

import { Service } from '@/UI'

const service = {
	title: 'Хранение',
	description: 'Для вашего удобства предлагаем услугу ответственного хранения стройматериалов.'
}

const features = [
	{
		name: 'Цена.',
		description:
			'Стоимость услуги индивидуальна. Подробности уточняйте у наших менеджеров.',
		icon: ServerIcon
	},
	{
		name: 'Сроки.',
		description:
			'Предлагаем разместить приобретённую продукцию на неограниченный срок хранения.',
		icon: ServerIcon
	},
	{
		name: 'Склад.',
		description:
			'Под место хранения предлагается оборудованный склад в черте города Дзержинск.',
		icon: ServerIcon
	},
]

export default function page() {
	return <Service features={features} service={service}/>
}
