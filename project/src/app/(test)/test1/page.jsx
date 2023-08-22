import { Suspense } from 'react'

import { getCatalog } from './server'
export const metadata = {
  title: 'Фабрика',
  description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  robots: {
    index: false
  },
};
export default async function page() {
	const catalog = await getCatalog()

	// console.log(catalog)

	return (
		<Suspense fallback={<p>Loading feed...</p>}>
			<div>{catalog.product_one.value}</div>
		</Suspense>
	)
}
