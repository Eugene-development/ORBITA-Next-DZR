import { create } from 'zustand'

const visibleBanner = create((set) => ({
	currentVisibleBanner: true,
	changeVisibleBanner: () => set(() => ({ currentVisibleBanner: false }))
}))

export const useStoreBanner = {
	visibleBanner
}
