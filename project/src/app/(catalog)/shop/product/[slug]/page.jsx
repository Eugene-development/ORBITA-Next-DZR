import { Product } from '@/UI'
import { getOneProduct } from '../server'

export async function generateMetadata({ params }) {
	const product = await getOneProduct(params)

	return {
		title: product.product_one.value + ' в Дзержинске по низкой цене со склада.',
		description:
			"У нас вы можете купить товар '" +
			product.product_one.value +
			"' по очень низкой цене. Есть услуга доставки по Дзержинску с грузчиками." +
			product.product_one.value +
			' в наличии на складе и под заказ. База стройматериалов работает по субботам и праздникам.'
	}
}

export default async ({ params }) => {
	const product = await getOneProduct(params)

	return <Product product={product} />
}
