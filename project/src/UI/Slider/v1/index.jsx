'use client'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Slide from './slide'
export default ({ sliders }) => {
	return (
		<Carousel
			className="mx-10"
			showThumbs={false}
			showArrows={true}
			showIndicators={true}
			showStatus={false}
			interval={4000}
			transitionTime={1000}
			infiniteLoop
			autoPlay
			stopOnHover
		>
			{sliders.map((slider, index) => (
				<Slide key={index} slider={slider} />
			))}
		</Carousel>
	)
}
