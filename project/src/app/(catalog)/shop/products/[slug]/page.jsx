import { ProductList } from '@/UI'
import { getOneCategory } from '../server'

export default async ({ params }) => {
	const category = await getOneCategory(params)

	return <ProductList category={category}/>
}
