'use client'
import { motion } from 'framer-motion'

import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'

const cards = [
	{
		name: 'Качество',
		description:
			'Идеальный для потребителя баланс между ценой и качеством строительных материалов.',
		icon: LifebuoyIcon
	},
	{
		name: 'Доставка',
		description:
			'Индивидуальный подход к условиям доставки стройматериалов до объекта клиента.',
		icon: LifebuoyIcon
	},
	{
		name: 'Цены',
		description: 'Возможность покупки товаров оптовыми партиями со значительной скидкой.',
		icon: LifebuoyIcon
	},
	{
		name: 'Сервис',
		description: 'Высокий уровень профессиональной подготовленности персонала компании.',
		icon: LifebuoyIcon
	}
]

export default () => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 2, y: -10 }}
			transition={{ type: 'spring', stiffness: 50 }}
		>
			<div className="relative isolate overflow-hidden bg-gray-50 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-5xl lg:mx-0">
						<h2 className="text-4xl font-display font-bold tracking-tight text-gray-900 sm:text-6xl">
							Орбита-Строй
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-700">
							Компания «Орбита-Строй» с 2011 года успешно продает строительные и
							отделочные материалы оптом и в розницу. С нами Вы легко сможете
							подобрать нужный и экономичный материал для выполнения различных
							строительно-отделочных работ. Наши специалисты также помогут подготовить
							смету и подсчитать стоимость расходов. И все это осуществляется в самые
							кратчайшие сроки с должным уровнем профессионализма.
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
						{cards.map((card) => (
							<div
								key={card.name}
								className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
							>
								<card.icon
									className="h-7 w-5 flex-none text-red-700"
									aria-hidden="true"
								/>
								<div className="text-base leading-7">
									<h3 className="font-semibold text-gray-900">{card.name}</h3>
									<p className="mt-2 text-gray-800">{card.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<img
					src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/logo/logo.png"
					alt="Product screenshot"
					className="mx-auto mt-24 w-[24rem] max-w-none sm:w-[36rem]"
					width={2432}
					height={1442}
				/>
			</div>
		</motion.main>
	)
}
