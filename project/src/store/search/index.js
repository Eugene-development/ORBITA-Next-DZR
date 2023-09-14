import { create } from 'zustand'

const visibleSearch = create((set) => ({
	currentVisibleSearch: false,
	openVisibleSearch: () => set(() => ({ currentVisibleSearch: true })),
	closeVisibleSearch: () => set(() => ({ currentVisibleSearch: false }))
}))

export const useStoreSearch = {
	visibleSearch
}
