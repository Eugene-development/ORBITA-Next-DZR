'use client'
import { Banner } from '@/UI'

import { contentBanner } from './staticData'
const { data } = contentBanner

import { useStoreBanner } from '@/store/banner'
const { visibleBanner } = useStoreBanner

export default () => {
	const { currentVisibleBanner, changeVisibleBanner } = visibleBanner()

	return (
		<Banner
			data={data}
			changeVisibleBanner={changeVisibleBanner}
			currentVisibleBanner={currentVisibleBanner}
		/>
	)
}
