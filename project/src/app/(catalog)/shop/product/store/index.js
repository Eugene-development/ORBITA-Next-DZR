import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const inCart = create(
	persist(
		(set) => ({
			productsInCart: [],
			setCurrentProductInCart: (id, name, price, unit, count) =>
				set((state) => ({
					productsInCart: [...state.productsInCart, { id, name, price, unit, count }]
				})),
			changeCountLS: (id, newQuantity) =>
				set((state) => ({
					productsInCart: state.productsInCart.map((product) =>
						product.id === id ? { ...product, count: newQuantity } : product
					)
				}))
			// set((state) => {
			// 	const targetProduct = state.productsInCart.find(function (product) {
			// 		return product.id == '76'
			// 	})
			// 	console.log(targetProduct)
			// 	targetProduct.count = param
			// 	productsInCart: [...state.productsInCart, { id, name, price, unit, count }]
			// })

			// setCurrentProductInCart: (id) => set(() => ({ productsInCart: id }))
			// productInCart: false,
			// changeStatusButton: () => set(() => ({ productInCart: true }))
		}),
		{
			name: 'cart'
		}
	)
)

// const countProductTable = create((set) => ({
// 	count: 1,
// 	setCount: (param) => {
// 		console.log(param)
// 		set(() => ({
// 			count: param
// 		}))
// 	}
// }))

export const useInCart = {
	inCart
	// countProductTable
}
