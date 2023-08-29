import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const inCart = create(
	// persist(
	(set) => ({
		// productsInCart: '',
		// setCurrentProductInCart: () => set(() => ({ productsInCart: '4' })),
		statusButton: true,
		changeStatusButton: () => set(() => ({ statusButton: false }))
	}),
	{
		name: 'cart'
	}
	// )
)

export const useInCart = {
	inCart
}
