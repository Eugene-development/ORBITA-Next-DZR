import Button from './Button'

const monthProduct = [
	{
		id: 1,
		value: 'Jan',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B3%D0%B2%D0%BB.jpg',
		price: 760,
		unit: 'шт'
	},
	{
		id: 2,
		value: 'Jan',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B3%D0%B2%D0%BB.jpg',
		price: 760,
		unit: 'шт'
	},
	{
		id: 3,
		value: 'Jan',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B3%D0%B2%D0%BB.jpg',
		price: 760,
		unit: 'шт'
	},
	{
		id: 4,
		value: 'Jan',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B3%D0%B2%D0%BB.jpg',
		price: 760,
		unit: 'шт'
	},
	{
		id: 5,
		value: 'Jan',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B3%D0%B2%D0%BB.jpg',
		price: 760,
		unit: 'шт'
	},
	{
		id: 6,
		value: 'Jan',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B3%D0%B2%D0%BB.jpg',
		price: 760,
		unit: 'шт'
	},
	{
		id: 7,
		value: 'Jan',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B3%D0%B2%D0%BB.jpg',
		price: 760,
		unit: 'шт'
	},
	{
		id: 8,
		value: 'Jan',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B3%D0%B2%D0%BB.jpg',
		price: 760,
		unit: 'мп'
	}
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
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
