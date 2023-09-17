import { create } from 'zustand'

const visibleSearch = create((set) => ({
	currentVisibleSearch: false,
	openVisibleSearch: () => set(() => ({ currentVisibleSearch: true })),
	closeVisibleSearch: () => set(() => ({ currentVisibleSearch: false }))
}))

const products = create((set) => ({
	allProducts: [],
	setAllProducts: (pr) => set(() => ({ allProducts: pr }))
}))

export const useStoreSearch = {
	visibleSearch,
	products
}
