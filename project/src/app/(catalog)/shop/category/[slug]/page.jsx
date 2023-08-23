import { Category } from '@/UI'
import { getOneRubric } from '../server'

export default async ({ params }) => {
	const rubric = await getOneRubric(params)

	return <Category rubric={rubric} />
}
