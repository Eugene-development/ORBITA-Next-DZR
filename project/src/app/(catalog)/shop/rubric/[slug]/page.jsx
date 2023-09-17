import { Rubric } from '@/UI'
import { getOneCatalog } from '../server'

export async function generateMetadata({ params }) {
	const catalog = await getOneCatalog(params)

	return {
		title:
			"База строительных материалов 'Орбита-Строй' | Купите товар " +
			catalog.catalog_one.value +
			' по низкой цене в Дзержинске',
		description:
			catalog.catalog_one.value +
			' по низким ценам в Дзержинске и области. Предлагаем купить с доставкой и скидкой товар ' +
			catalog.catalog_one.value +
			'. Широкий ассортимент и качественное обслуживание.'
	}
}

export default async ({ params }) => {
	const catalog = await getOneCatalog(params)

	return <Rubric catalog={catalog} />
}
