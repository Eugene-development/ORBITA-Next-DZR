'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

function OutsideClickHandler({ onOutsideClick, children }) {
	useEffect(() => {
		function handleClickOutside(event) {
			if (event.target && !event.target.closest('.your-target-class')) {
				onOutsideClick()
			}
		}

		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [onOutsideClick])

	return <div>{children}</div>
}

const rubrics = [
	{
		name: 'Стройматериалы',
		description: 'Для строительства и ремонта',
		img: 'https://colorprofi.ru/wp-content/uploads/2022/09/klassifikaciya-strojmaterialov.jpg',
		href: 'stroymaterialy'
	},
	{
		name: 'Изоляция',
		description: 'Для защиты от влаги, шума и ветра',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B8%D0%B7%D0%BE%D1%84%20%D1%84%D0%BE%D0%BB%D1%8C%D0%B3%D0%B0.jpg',
		href: 'izolyatsiya'
	},
	{
		name: 'Отделка',
		description: 'Для внутренних отделочных работ',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/akvateks_-_ekstra_belyj_0_8_l_13845.jpg',
		href: 'otdelka'
	},
	{
		name: 'Инструмент',
		description: 'Для автоматизации и облегчения труда',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/mQ6tGoRY6s1SvjONBPrzIYmA5YrbTKfudwyMv63i.png',
		href: 'instrument'
	},
	{
		name: 'Сантехника',
		description: 'Для сантехнических и прочих работ',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/SrrSRqPDaYGHpsFISosIAyp6dj6Z16Zz5evzuSJE.jpg',
		href: 'santehnika'
	},
	{
		name: 'Электротовары',
		description: 'Для работ с электрикой и проводкой',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/vl0Pq4TSaUvulSLZbkYoMZsx4ZjS515UrV0rOiZj.jpg',
		href: 'elektrotovary'
	}
]
const callsToAction = [
	{ name: 'Гарантии', href: '#', icon: PlayCircleIcon },
	{ name: 'Акции', href: '#', icon: PhoneIcon }
]
const services = [
	{
		name: 'Оплата',
		href: '/information/payment',
		description: 'Все доступные формы оплаты покупки для вашего удобства'
	},
	{
		name: 'Доставка',
		href: '/information/delivery',
		description: 'Услуга доставки собственным транспортом до вашего объекта'
	},
	{
		name: 'Грузчики',
		href: '/information/movers',
		description: 'Если вам необходимы разгрузо-погрузочные работы на вашем объекте'
	},
	{
		name: 'Хранение',
		href: '/information/storage',
		description: 'Предоставляем услугу хранения приобретённых вами стройматериалов'
	}
]

export default () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [showCatalog, setShowCatalog] = useState(false)
	const [showServices, setShowServices] = useState(false)

	function handleOutsideClick() {
		setShowCatalog(false)
		setShowServices(false)
	}
	return (
		<header className="bg-white sticky top-0 z-50 shadow-xl">
			{!mobileMenuOpen && (
				<nav
					className="mx-auto flex max-w-full items-center justify-between p-2 lg:px-10"
					aria-label="Global"
				>
					<div className="flex lg:flex-1">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Орбита-строй</span>
							<img
								className="h-12 w-auto"
								src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/logo/logo.png"
								alt="Логотип"
							/>
						</Link>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Открыть меню</span>
							<span className="mr-2">Меню</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<Popover.Group className="hidden lg:flex lg:gap-x-12">
						<Link
							href="/"
							className="text-base font-display font-semibold leading-6 text-gray-800 transition ease-in-out hover:scale-110 hover:text-red-700"
						>
							Главная
						</Link>

						<OutsideClickHandler onOutsideClick={handleOutsideClick}>
							<Popover className="relative">
								<Popover.Button
									onClick={() => {
										setShowCatalog(!showCatalog)
										setShowServices(false)
									}}
									className="your-target-class outline-none font-display flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-800 hover:text-red-700 transition ease-in-out hover:scale-110"
								>
									Каталог
									<ChevronDownIcon
										className="h-5 w-5 flex-none text-red-800"
										aria-hidden="true"
									/>
								</Popover.Button>

								<Transition
									show={showCatalog}
									as={Fragment}
									enter="transition ease-out duration-200"
									enterFrom="opacity-0 translate-y-1"
									enterTo="opacity-100 translate-y-0"
									leave="transition ease-in duration-150"
									leaveFrom="opacity-100 translate-y-0"
									leaveTo="opacity-0 translate-y-1"
								>
									<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
										<div className="p-4">
											{rubrics.map((item) => (
												<div
													onClick={() => setShowCatalog(false)}
													key={item.name}
													className="group relative flex gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50"
												>
													<div className="mt-1 flex h-14 w-14 flex-none items-center justify-center">
														{/* <item.icon
														className="h-6 w-6 text-gray-600 group-hover:text-red-600"
														aria-hidden="true"
													/> */}
														<img src={item.img} alt="рубрика" />
													</div>
													<div className="flex-auto">
														<Link
															href={`/shop/rubric/${item.href}`}
															className="block font-semibold text-gray-900"
														>
															{item.name}
															<span className="absolute inset-0" />
														</Link>
														<p className="mt-1 text-gray-600">
															{item.description}
														</p>
													</div>
												</div>
											))}
										</div>
										{/* <div className="grid grid-cols-2 divide-x divide-red-800/20 bg-gray-50 border-t border-red-800/20">
											{callsToAction.map((item) => (
												<Link
													key={item.name}
													href={item.href}
													className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
												>
													<item.icon
														className="h-5 w-5 flex-none text-gray-400"
														aria-hidden="true"
													/>
													{item.name}
												</Link>
											))}
										</div> */}
									</Popover.Panel>
								</Transition>
							</Popover>
						</OutsideClickHandler>
						<OutsideClickHandler onOutsideClick={handleOutsideClick}>
							<Popover className="relative">
								<Popover.Button
									onClick={() => {
										setShowServices(!showServices)
										setShowCatalog(false)
									}}
									className="outline-none flex items-center gap-x-1 text-base font-display font-semibold leading-6 text-gray-800 hover:text-red-700 transition ease-in-out hover:scale-110"
								>
									Услуги
									<ChevronDownIcon
										className="h-5 w-5 flex-none text-red-800"
										aria-hidden="true"
									/>
								</Popover.Button>

								<Transition
									show={showServices}
									as={Fragment}
									enter="transition ease-out duration-200"
									enterFrom="opacity-0 translate-y-1"
									enterTo="opacity-100 translate-y-0"
									leave="transition ease-in duration-150"
									leaveFrom="opacity-100 translate-y-0"
									leaveTo="opacity-0 translate-y-1"
								>
									<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5">
										{services.map((item) => (
											<div
												onClick={() => setShowServices(false)}
												key={item.name}
												className="relative rounded-lg p-4 hover:bg-gray-50"
											>
												<Link
													href={item.href}
													className="block text-sm font-semibold leading-6 text-gray-900"
												>
													{item.name}
													<span className="absolute inset-0" />
												</Link>
												<p className="mt-1 text-sm leading-6 text-gray-600">
													{item.description}
												</p>
											</div>
										))}
									</Popover.Panel>
								</Transition>
							</Popover>
						</OutsideClickHandler>
						<Link
							href="/about"
							className="text-base font-display font-semibold leading-6 text-gray-800 hover:text-red-700 transition ease-in-out hover:scale-110"
						>
							О компании
						</Link>
						{/* <Link
						href="#"
						className="text-base font-display font-semibold leading-6 text-gray-800"
					>
						Блог
					</Link> */}

						<Link
							href="/contact"
							className="text-base font-display font-semibold leading-6 text-gray-800 hover:text-red-700 transition ease-in-out hover:scale-110"
						>
							Контакты
						</Link>
					</Popover.Group>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<a
							href="https://vk.com/orbita_stroy"
							className="text-sm font-display font-semibold leading-6 text-gray-900 hover:text-red-700 transition ease-in-out hover:scale-110"
						>
							ВКонтакте{' '}
							<span aria-hidden="true" className="text-red-800">
								&rarr;
							</span>
						</a>
					</div>
				</nav>
			)}
			{/* Mobile Menu */}
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="p-6">
						<div className="flex items-center justify-between">
							<Link href="/" className="-m-1.5 p-1.5">
								<span className="sr-only">Логотип</span>
								<img
									className="h-8 w-auto"
									src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/logo/logo.png"
									alt="логотип"
								/>
							</Link>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Закрыть меню</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{rubrics.map((item) => (
										<Link
											onClick={() => setMobileMenuOpen(false)}
											key={item.name}
											href={'/shop/rubric/' + item.href}
											className="outline-none group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
												<img src={item.img} alt="рубрика" />
											</div>
											{item.name}
										</Link>
									))}
								</div>
								<div className="space-y-2 py-6">
									{services.map((item) => (
										<Link
											onClick={() => setMobileMenuOpen(false)}
											key={item.name}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											{item.name}
										</Link>
									))}
								</div>
								<div className="py-6">
									<a
										href="https://vk.com/orbita_stroy"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										ВКонтакте
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center">
						{callsToAction.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
							>
								{item.name}
							</a>
						))}
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}
