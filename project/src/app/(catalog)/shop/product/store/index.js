import { create } from 'zustand'
import { persist } from 'zustand/middleware'
const inCart = create(
	persist(
		(set) => ({
			productsInCart: [],
			setCurrentProductInCart: (id) =>
				set((state) => ({
					productsInCart: [...state.productsInCart, id]
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
