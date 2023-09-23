'use client'
import { motion } from 'framer-motion'

import Link from 'next/link'

export default ({ slider }) => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 2, y: -10 }}
			transition={{ type: 'spring', stiffness: 50 }}
		>
			<section className="py-24 md:py-12">
				<div className="relative isolate overflow-hidden">
					<div
						className="absolute inset-y-0 right-3/4 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg]  shadow-xl shadow-gray-600/10 ring-1 ring-gray-50 sm:-mr-80 lg:-mr-96"
						aria-hidden="true"
					/>
					<div className="gap-8 items-center  mx-auto max-w-screen-xl xl:gap-16 lg:grid lg:grid-cols-2 ">
						<div>
							<h2 className="mb-4  text-3xl sm:text-6xl tracking-tight font-display font-extrabold text-gray-900 dark:text-white">
								{slider.title}
							</h2>
							<p className="md:mb-6 max-w-xl mx-auto  text-sm sm:text-base font-light text-gray-500 md:text-lg dark:text-gray-400">
								{slider.description}
							</p>

							<Link
								href={`/shop/rubric/${slider.href}`}
								data-drawer-target="drawer-read-product-advanced"
								data-drawer-show="drawer-read-product-advanced"
								aria-controls="drawer-read-product-advanced"
								className="w-48 mt-8 py-2 px-8 flex  mx-auto text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-50 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
							>
								<div className="mx-auto flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-4 h-4 mr-2 -ml-0.5"
									>
										<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
										/>
									</svg>
									В каталог
								</div>
							</Link>
						</div>
						<div className="hidden sm:block">
							<img
								className="p-4 mx-auto sm:flex h-[28rem]"
								src={slider.image}
								alt="фото рубрики"
							/>
						</div>
					</div>
				</div>
			</section>
		</motion.main>
	)
}
