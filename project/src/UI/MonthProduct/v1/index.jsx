import Button from './Button'

const monthProduct = [
	{
		id: 261,
		value: 'ГВЛВ "Кнауф" 10 мм (1200*2500)',
		price: 790,
		unit: 'шт',
		link: '/shop/product/gvlv-knauf-10-mm-12002500',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B3%D0%B2%D0%BB.jpg'
	},
	{
		id: 121,
		value: 'Линокром ТКП сланец серый (10 м2)',
		price: 1700,
		unit: 'шт',
		link: '/shop/product/linokrom-tkp-slanec-seryi-10-m',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA%D1%80%D0%BE%D0%BC.jpg'
	},
	{
		id: 123,
		value: 'Линокром ТПП (15 м2)',
		price: 2340,
		unit: 'шт',
		link: '/shop/product/linokrom-tpp-15-m2',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA%D1%80%D0%BE%D0%BC.jpg'
	},
	{
		id: 223,
		value: 'Брус строганный 50*40*3000',
		price: 165,
		unit: 'шт',
		link: '/shop/product/brus-strogannyi-50403000',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B1%D1%80%D1%83%D1%81%D1%8C%D1%8F.jpg'
	},
]
export default () => {
	return (
		<section className="font-display">
			<div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
					<h2 className="mb-4 text-xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
						Стройматериалы по сниженным ценам
					</h2>
					<p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
						Так же вы получите <strong className="text-red-700">плюс 5% скидки</strong>{' '}
						к цене при заказе через наш интернет магазин стройматериалов.
					</p>
				</div>
				<div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 xl:gap-8 md:space-y-0">
					{monthProduct.map(({ id, img, value, price, unit }) => (
						<div
							key={id}
							className="p-6 bg-white rounded  dark:bg-gray-800 shadow-xl shadow-gray-400"
						>
							<div className="mx-auto flex justify-center items-center mb-2 w-20 h-20 rounded lg:h-56 lg:w-56 ">
								<img src={img} alt={value} />
							</div>
							<h3 className="mb-2 text-xl font-bold dark:text-white">
								{price} р/{unit}
							</h3>
							<p className="font-light text-sm text-gray-500 dark:text-gray-400">
								{value}
							</p>
							<Button
								productID={id}
								productName={value}
								productPrice={price}
								productUnit={unit}
								productCount="1"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
