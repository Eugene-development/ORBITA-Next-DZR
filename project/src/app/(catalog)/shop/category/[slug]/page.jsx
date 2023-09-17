import { Category } from '@/UI'
import { getOneRubric } from '../server'

export async function generateMetadata({ params }) {
	const rubric = await getOneRubric(params)

	return {
		title:
			rubric.rubric_one.value +
			' по низкой цене от базы Орбита-Строй' +
			' | ' +
			rubric.rubric_one.value +
			' в Дзержинске со склада.',
		description:
			rubric.rubric_one.value +
			' в Дзержинске и области. ' +
			'Доступная цена и постоянные акции. На нашем складе вас ждёт ' +
			rubric.rubric_one.value +
			' по низкой цене со скидками и с доставкой.'
	}
}

export default async ({ params }) => {
	const rubric = await getOneRubric(params)

	return <Category rubric={rubric} />
}
