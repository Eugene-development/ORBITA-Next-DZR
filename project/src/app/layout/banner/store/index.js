import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const visibleBanner = create((set) => ({
	currentVisibleBanner: true,
	changeVisibleBanner: () => set(() => ({ currentVisibleBanner: false }))
}))
// const visibleBanner = create(
// 	persist(
// 		(set) => ({
// 			currentVisibleBanner: true,
// 			changeVisibleBanner: () => set(() => ({ currentVisibleBanner: false }))
// 		}),
// 		{
// 			name: 'food-storage' // name of the item in the storage (must be unique)
// 		}
// 	)
// )

export const useStoreBanner = {
	visibleBanner
}
