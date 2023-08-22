'use client'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Example() {
	return (
		<Disclosure as="nav" className="bg-white shadow">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-full px-2 sm:px-4 lg:px-8">
						<div className="flex h-16 justify-between">
							<div className="flex px-2 lg:px-0">
								<div className="hidden lg:ml-6 lg:flex lg:space-x-8">
									{/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
									<a
										href="#"
										className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
									>
										Team
									</a>
									<a
										href="#"
										className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
									>
										Projects
									</a>
									<a
										href="#"
										className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
									>
										Calendar
									</a>
								</div>
							</div>
							<div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
								<div className="w-full max-w-lg lg:max-w-xs">
									<label htmlFor="search" className="sr-only">
										Поиск
									</label>
									<div className="relative">
										<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
											<MagnifyingGlassIcon
												className="h-5 w-5 text-gray-400"
												aria-hidden="true"
											/>
										</div>
										<input
											id="search"
											name="search"
											className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											placeholder="Поиск товара"
											type="search"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="lg:hidden">
						<div className="space-y-1 pb-3 pt-2">
							{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
							<Disclosure.Button
								as="a"
								href="#"
								className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
							>
								Dashboard
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
							>
								Team
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
							>
								Projects
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
							>
								Calendar
							</Disclosure.Button>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
