import { gql, request } from 'graphql-request'

const ONE_PRODUCT = gql`
	query product($slug: String!, $key: String!) {
		product_one(slug: $slug, key: $key) {
			id
			value
			price {
				value
			}
			unit {
				value
			}
			text {
				value
			}
			image {
				hash
				alt
			}
			parent: parentable {
				... on Category {
					value
					slug
				}
			}
		}
	}
`

export async function getOneProduct({ slug }) {
	const url = process.env.NEXT_PUBLIC_GRAPHQL
	const variables = {
		key: '1',
		slug
	}
	return await request(url, ONE_PRODUCT, variables)
}
