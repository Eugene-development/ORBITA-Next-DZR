'use client'
import { motion } from 'framer-motion'

export default () => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 2, y: -10 }}
			transition={{ type: 'spring', stiffness: 50 }}
		>
			<div className="bg-gray-50 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">
							Наши адреса
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Для вашего удобства наши торговые подразделения расположены в разных
							частях города. На выезде со стороны Нижнего Новгорода с одной стороны и
							на строительном рынке "Ярмарка" с другой.
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none">
						<div>
							<h3 className="border-l border-red-600 pl-6 font-semibold text-gray-900">
								Дзержинск, пр. Ленина, 121-В
							</h3>
							<address className="border-l  border-gray-200 pl-6 pt-2 not-italic text-gray-600 text-sm">
								<p>
									Съезд с объездной дороги г. Дзержинска. Рядом с шинным центром
									Велс.
								</p>
								<div className="mt-12">
									<div className="flex">
										<div className="flex-shrink-0">
											<svg
												className="h-6 w-6 text-red-800"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-divnecap="round"
													stroke-divnejoin="round"
													strokeWidth="2"
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
										</div>
										<div className="ml-3 text-base">
											<p>8 (8314) 23-70-96</p>
										</div>
									</div>
									<div className="mt-6 flex">
										<div className="flex-shrink-0">
											<svg
												className="h-6 w-6 text-red-800"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-divnecap="round"
													stroke-divnejoin="round"
													strokeWidth="2"
													d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
										</div>
										<div className="ml-3 text-base ">
											<p>info@orbita-stroy.com</p>
										</div>
									</div>
									<div className="mt-6 flex">
										<div className="flex-shrink-0">
											<svg
												className="h-6 w-6 text-red-800"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-divnecap="round"
													stroke-divnejoin="round"
													strokeWidth="2"
													d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
										</div>
										<div className="ml-3 text-base ">
											<p>Режим работы: Пн-Пт 8:00-17:30; Сб 9:00-16:00</p>
										</div>
									</div>
								</div>
							</address>
						</div>
						<div>
							<h3 className="border-l border-red-600 pl-6 font-semibold text-gray-900">
								Дзержинск, ул. Космонавтов, 4-Б
							</h3>
							<address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600 text-sm">
								<p>
									Территория строительного рынка "Ярмарка 41" Павильоны 33, 34,
									35, 41, 52, 53
								</p>
								<div className="mt-12">
									<div className="flex">
										<div className="flex-shrink-0">
											<svg
												className="h-6 w-6 text-red-800"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-divnecap="round"
													stroke-divnejoin="round"
													strokeWidth="2"
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
										</div>
										<div className="ml-3 text-base ">
											<p>8 (902) 303-36-54</p>
										</div>
									</div>
									<div className="mt-6 flex">
										<div className="flex-shrink-0 text-red-800">
											<svg
												className="h-6 w-6 "
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-divnecap="round"
													stroke-divnejoin="round"
													strokeWidth="2"
													d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
										</div>
										<div className="ml-3 text-base ">
											<p>info@orbita-stroy.com</p>
										</div>
									</div>
									<div className="mt-6 flex">
										<div className="flex-shrink-0">
											<svg
												className="h-6 w-6 text-red-800"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-divnecap="round"
													stroke-divnejoin="round"
													strokeWidth="2"
													d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
										</div>
										<div className="ml-3 text-base ">
											<p>Режим работы: Пн-Сб 8:00-17:30; Вс - выходной</p>
										</div>
									</div>
								</div>
							</address>
						</div>
					</div>
				</div>
			</div>
		</motion.main>
	)
}
