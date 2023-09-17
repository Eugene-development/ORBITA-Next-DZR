import { ServerIcon } from '@heroicons/react/20/solid'

import { Service } from '@/UI'

const service = {
	title: 'Оплата продукции',
	description: 'Рассчитывайтесь за строительные материалы удобным для вас способом.'
}

const features = [
	{
		name: 'Наличные деньги.',
		description:
			'Оплата стройматериалов наличными деньгами — простой и надежный способ провести оплату приобретенных стройматериалов.',
		icon: ServerIcon
	},
	{
		name: 'Банковская карта.',
		description:
			'Оплатите покупку стройматериалов быстро и удобно с помощью банковской карты – без лишних сложностей и задержек.',
		icon: ServerIcon
	},
	{
		name: 'Расчётный счёт.',
		description:
			'Оплачивайте стройматериалы через расчетный счет с удобством и контролем финансов для успешного завершения проекта.',
		icon: ServerIcon
	}
]

export default function page() {
	return <Service features={features} service={service} />
}
