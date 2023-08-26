import { Product } from '@/UI'
import { getOneProduct } from '../server'


export default async ({ params }) => {
	const product = await getOneProduct(params)

	return <Product product={product}/>
}
