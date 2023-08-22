import { getOneRubric } from '../server'
import { Category } from '@/UI'

export default async ({ params }) => {
	const rubric = await getOneRubric(params)

	return <Category rubric={rubric} />
}
