'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
export const metadata = {
  title: 'Фабрика',
  description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  robots: {
    index: false
  },
};
export default () => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={3}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide>Slide 1</SwiperSlide>
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide>
			...
		</Swiper>
	)
}
