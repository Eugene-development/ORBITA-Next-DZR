import { Rubric } from '@/UI'
import { getOneCatalog } from '../server'


export async function generateMetadata({ params }) {
  const catalog = await getOneCatalog(params)
 
  return {
    title: catalog.catalog_one.value,
    
  }
}
export default async ({ params }) => {
	const catalog = await getOneCatalog(params)

	return <Rubric catalog={catalog} />
}
