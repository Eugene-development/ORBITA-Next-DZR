import { create } from 'zustand'
import { persist } from 'zustand/middleware'
// import { immer } from 'zustand/middleware/immer'
const inCart = create(
	persist(
		// immer(
		(set) => ({
			productsInCart: [],
			setCurrentProductInCart: (id) =>
				set((state) => ({
					productsInCart: [...state.productsInCart, id]
				}))
			// setCurrentProductInCart: (id) =>
			// 	set((state) => {
			// 		state.productsInCart.push({ id })
			// 	})
			// setCurrentProductInCart: (id) => set(() => ({ productsInCart: id }))
			// productInCart: false,
			// changeStatusButton: () => set(() => ({ productInCart: true }))
		}),
		{
			name: 'cart'
		}
	)
	// )
)

export const useInCart = {
	inCart
}
