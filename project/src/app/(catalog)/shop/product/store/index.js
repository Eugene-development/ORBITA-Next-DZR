import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const inCart = create(
	persist(
		(set) => ({
			productsInCart: [],
			totalCount: 0,
			setCurrentProductInCart: (id, name, price, unit, count) =>
				set((state) => ({
					productsInCart: [...state.productsInCart, { id, name, price, unit, count }]
				})),
			changeCountLS: (id, newQuantity) =>
				set((state) => ({
					productsInCart: state.productsInCart.map((product) =>
						product.id === id ? { ...product, count: newQuantity } : product
					)
				})),

			removeProduct: (id) =>
				set((state) => ({
					productsInCart: state.productsInCart.filter((product) => product.id !== id)
				})),
			// Сумма считается не корректно. При загрузке страницы выводится ноль.
			setTotalCount: () =>
				set((state) => ({
					totalCount: state.productsInCart.reduce((sum, product) => {
						let price = product.price
						let count = product.count
						return sum + price * count - price * count * 0.05
					}, 0)
				}))

			// 		total = $prodInCart.reduce((sum, product) => {
			// 	let price = product.price?.value;
			// 	return sum + price * product.quantity;
			// }, 0);
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
