import { ProductList } from '@/UI'
import { getOneCategory } from '../server'

export async function generateMetadata({ params }) {
	const category = await getOneCategory(params)

	return {
		title:
			category.category_one.value +
			' по ценам ниже конкурентов. Купите товар "' +
			category.category_one.value +
			'" в Дзержинске с нашего склада.',
		description:
			category.category_one.value +
			' по привлекательной цене оптом и в розницу. Данный товар ' +
			category.category_one.value +
			' можно купить на нашем сайте или напрямую со склада. Актуальная акция: ' +
			category.category_one.value +
			' в Дзержинске с доставкой до объекта.'
	}
}

export default async ({ params }) => {
	const category = await getOneCategory(params)

	return <ProductList category={category} />
}
