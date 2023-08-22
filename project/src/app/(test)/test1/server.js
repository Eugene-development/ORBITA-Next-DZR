'use server'
import { gql, request } from 'graphql-request'

const ALL_CATALOG = gql`
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

export async function getCatalog(data) {
	const url = process.env.NEXT_PUBLIC_GRAPHQL
	const variables = {
		key: '1',
		slug: 'doska-obreznaya-obrabotannaya-251006000'
	}
	return request(url, ALL_CATALOG, variables)
}
