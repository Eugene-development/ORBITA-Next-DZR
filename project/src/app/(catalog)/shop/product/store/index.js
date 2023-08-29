import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const inCart = create(
	persist(
		(set) => ({
			productsInCart: '',
			setCurrentProductInCart: (p) => set(() => ({ productsInCart: p }))
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
