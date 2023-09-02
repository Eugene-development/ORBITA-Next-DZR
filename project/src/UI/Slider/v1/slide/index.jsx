export default ({ slider }) => {
	return (
		<>
			<section className="my-16 md:my-0">
				<div className="relative isolate overflow-hidden">
					<div
						className="absolute inset-y-0 right-3/4 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg]  shadow-xl shadow-gray-600/10 ring-1 ring-gray-50 sm:-mr-80 lg:-mr-96"
						aria-hidden="true"
					/>
					<div className="gap-8 items-center  mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 ">
						<div>
							<h2 className="mb-4 text-3xl sm:text-5xl tracking-tight font-display font-extrabold text-gray-900 dark:text-white">
								{slider.title}
							</h2>
							<p className="md:mb-6 max-w-xl text-sm sm:text-base font-light text-gray-500 md:text-lg dark:text-gray-400">
								{slider.description}
							</p>
						</div>
						<div className="hidden sm:block">
							<img
								className="p-20 mx-auto sm:flex"
								src={slider.image}
								alt="фото рубрики"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
