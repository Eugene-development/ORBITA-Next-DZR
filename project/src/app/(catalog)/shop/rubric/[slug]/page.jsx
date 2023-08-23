import { Rubric } from '@/UI'
import { getOneCatalog } from '../server'

export default async ({ params }) => {
	const catalog = await getOneCatalog(params)

	return <Rubric catalog={catalog} />
}
