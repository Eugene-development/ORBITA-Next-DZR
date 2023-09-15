import { Info } from '@/UI'
import { getAllProducts } from './server'

export default async function index() {
		const allProducts = await getAllProducts()

	return <Info allProducts={allProducts}/>
}
