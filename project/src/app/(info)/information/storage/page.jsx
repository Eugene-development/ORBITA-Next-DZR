'use client'
import { motion } from 'framer-motion'

import { ServerIcon } from '@heroicons/react/20/solid'

import { Service } from '@/UI'

const service = {
	title: 'Хранение',
	description: 'Для вашего удобства предлагаем услугу ответственного хранения стройматериалов.'
}

const features = [
	{
		name: 'Цена.',
		description: 'Стоимость услуги индивидуальна. Подробности уточняйте у наших менеджеров.',
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
