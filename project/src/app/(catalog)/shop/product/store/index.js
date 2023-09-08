import { create } from 'zustand'
import { persist } from 'zustand/middleware'
const inCart = create(
	persist(
		(set) => ({
			productsInCart: [],
			setCurrentProductInCart: (id, name, price, unit) =>
				set((state) => ({
					productsInCart: [...state.productsInCart, { id, name, price, unit }]
				}))
			// setCurrentProductInCart: (id) => set(() => ({ productsInCart: id }))
			// productInCart: false,
			// changeStatusButton: () => set(() => ({ productInCart: true }))
		}),
		{
			name: 'cart'
		}
	)
)

export const useInCart = {
	inCart
}
