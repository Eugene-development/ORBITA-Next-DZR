import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const inCart = create(
	persist(
		(set) => ({
			productsInCart: '',
			setCurrentProductInCart: () => set(() => ({ productsInCart: '4' }))
		}),
		{
			name: 'cart'
		}
	)
)

export const useInCart = {
	inCart
}
