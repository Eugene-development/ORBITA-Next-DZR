import Page from '../DAL'


export async function generateMetadata() {
  const catalog = await getCatalog()
 
  return {
    title: catalog.product_one.value,
    
  }
}
export default ({ params }) => {
	return <Page params={params} />
}
