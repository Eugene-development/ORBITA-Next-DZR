export default () => {
	return (
		<>
			<div className="mt-16 text-center text-base font-display">
				<div>
					<h2 className="text-base font-semibold uppercase tracking-wide text-red-600">
						это интересно
					</h2>
					<h3 className="mt-2 text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl">
						Отзывы о нас
					</h3>
				</div>
			</div>

			<section className="mt-14 bg-gray-900 font-display">
				<div className="md:grid md:grid-cols-2">
					<div className="py-8 px-16 md:flex md:flex-col md:border-r md:border-red-900 md:py-20 ">
						<div className="text-3xl text-gray-100 md:flex-shrink-0">
							<h2>ООО "РемСтройМонтаж"</h2>
						</div>
						<blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
							<div className="relative text-lg font-medium text-white md:flex-grow">
								<svg
									aria-hidden="true"
									className="absolute top-0 left-0 h-6 w-6 -translate-x-3 -translate-y-2 transform text-gray-100"
									fill="currentColor"
									viewBox="0 0 32 32"
								>
									<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
								</svg>
								<br />
								<p className="relative text-base">
									АО "Ремстроймонтаж" выражает признательность команде
									"Орбита-Строй" за профессионализм и оперативность качественного
									подбора строительных материалов. Высокий профессиональный
									уровень сотрудников Вашей компании помогает решать множество
									проблем в области поставок строительных материалов на объекты
									нашего предприятия. Мы зачастую делаем заявки и через интернет
									магазин стройматериалов этой компании.
								</p>
							</div>
							<footer className="mt-8">
								<div className="flex">
									<div className="ml-1">
										<div className="text-base font-medium text-white">
											Вилков А.Н.
										</div>
										<div className="text-base font-medium text-red-500">
											Генеральный директор
										</div>
									</div>
								</div>
							</footer>
						</blockquote>
					</div>
					<div className="border-t-2 py-8 px-16 md:border-t-0 md:border-l md:py-20 ">
						<div className="text-3xl text-gray-100 md:flex-shrink-0">
							<h2>ООО "ПСГ" Химрегион</h2>
						</div>
						<blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
							<div className="relative text-lg font-medium text-white md:flex-grow">
								<svg
									className="absolute top-0 left-0 h-6 w-6 -translate-x-3 -translate-y-2 transform text-gray-100"
									fill="currentColor"
									viewBox="0 0 32 32"
								>
									<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
								</svg>
								<br />
								<p className="relative text-base">
									ООО "ПСГ" Химрегион сотрудничает с "Орбита-Строй" с 2016 года.
									Хотим от всей души поблагодарить Вас за внимательное отношение к
									своим клиентам и профессионализм. Довольны обилием ассортимента,
									постоянными акциями и низкими ценами. Очень надеемся на
									дальнейшее взаимовыгодное сотрудничество с Вами и вашим
									коллективом. Рады, что теперь есть удобный интернет магазин
									строительных и отделочных материалов.
								</p>
							</div>
							<footer className="mt-8">
								<div className="flex">
									<div className="ml-1">
										<div className="text-base font-medium text-white">
											Чернышев В.В.
										</div>
										<div className="text-base font-medium text-red-500">
											Генеральный директор
										</div>
									</div>
								</div>
							</footer>
						</blockquote>
					</div>
				</div>
			</section>
		</>
	)
}
