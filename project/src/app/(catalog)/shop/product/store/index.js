import { create } from 'zustand'
import { persist } from 'zustand/middleware'
const inCart = create(
	persist(
		(set) => ({
			productsInCart: [],
			setCurrentProductInCart: (id, name, price) =>
				set((state) => ({
					productsInCart: [...state.productsInCart, { id, name, price }]
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
