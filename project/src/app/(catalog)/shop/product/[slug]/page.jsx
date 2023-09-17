import Page from '../DAL'
import { getOneProduct } from '../server'



// export async function generateMetadata() {
//   const catalog = await getOneProduct()
 
//   return {
//     title: catalog.product_one.value,
    
//   }
// }
export default ({ params }) => {
	return <Page params={params} />
}
