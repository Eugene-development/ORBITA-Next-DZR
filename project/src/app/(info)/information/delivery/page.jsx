'use client'
import { motion } from 'framer-motion'

import { ServerIcon } from '@heroicons/react/20/solid'

import { Service } from '@/UI'

const service = {
	title: 'Доставка стройматериалов',
	description:
		'Для удобства мы предлагаем покупателям совершить покупку с доставкой стройматериалов на адрес объекта.'
}

const features = [
	{
		name: 'Доставка по Дзержинску и Нижнему Новгороду.',
		description:
			'Наша компания осуществляет доставку строительных и отделочных материалов как по Дзержинску, так и по Нижнему Новгороду и области.',
		icon: ServerIcon
	},
	{
		name: 'Время доставки.',
		description:
			'Доставка товара осуществляется с понедельника по субботу согласно графику работы магазина. Также Вы можете получить товар с нашего склада самовывозом.',
		icon: ServerIcon
	},
	{
		name: 'ВНИМАНИЕ!',
		description:
			'Разгрузка и подъём строительных материалов оплачивается дополнительно и согласуется с менеджером не менее чем за 3 часа до подачи заявки. ',
		icon: ServerIcon
	},
	{
		name: 'Акция.',
		description: 'При заказе товара от 20 000 рублей доставка массой до 1500 кг – БЕСПЛАТНО!',
		icon: ServerIcon
	}
]

export default function page() {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 2, y: -10 }}
			transition={{ type: 'spring', stiffness: 50 }}
		>
			<Service features={features} service={service} />
		</motion.main>
	)
}
