import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// define the initial state
const initialState = {
	productsInCart: []
}

const inCart = create(
	persist(
		(set) => ({
			initialState,
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

			removeAllProducts: () =>
				set(() => ({
					initialState
				})),

			setTotalCount: () =>
				set((state) => ({
					totalCount: Math.ceil(
						state.productsInCart.reduce((sum, product) => {
							let price = product.price
							let count = product.count
							return sum + price * count - price * count * 0.05
						}, 0)
					)
				}))
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
