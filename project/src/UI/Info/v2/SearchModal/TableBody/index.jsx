// TODO удалить этот компонент
import { getAllProducts } from "@/app/layout/info/server"
export default async function index() {

    const allProducts = await getAllProducts()
  return (
    <tbody>
                                                        {allProducts.product.map(({id, value, price, unit})=> (
                                                            <tr key={id} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
															<th
																scope="row"
																className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
															>
																<div className="flex items-center mr-3 text-xs">
																	{/* <img
																		src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
																		alt="iMac Front Image"
																		className="h-8 w-auto mr-3"
																	/> */}
																	{value}
																</div>
															</th>
															{/* <td className="px-4 py-3">
																<span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
																	Desktop PC
																</span>
															</td> */}
															<td className="px-4 py-3">{price?.value} р/{unit?.value}</td>
															<td className="px-4 py-3  font-medium text-gray-900 whitespace-nowrap dark:text-white">
																<div className="flex items-center space-x-4 ">
																	<button
																		type="button"
																		data-drawer-target="drawer-read-product-advanced"
																		data-drawer-show="drawer-read-product-advanced"
																		aria-controls="drawer-read-product-advanced"
																		className="py-2 px-3 flex items-center mx-auto text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
																	>
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
																		В корзину
																	</button>
																</div>
															</td>
														</tr>

                                                        ))}
														
													</tbody>
  )
}
