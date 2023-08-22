import { getOneCatalog } from '../server'
import { Rubric } from '@/UI'

export default async ({ params }) => {
	const catalog = await getOneCatalog(params)

	return <Rubric catalog={catalog} />
}
