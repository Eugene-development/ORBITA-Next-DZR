import { gql, request } from 'graphql-request'

const ONE_CATEGORY = gql`
	query category($slug: String!, $key: String!) {
		category_one(slug: $slug, key: $key) {
			value
			text {
				key
				value
			}
			product {
				id
				value
				slug
				price {
					value
				}
				unit {
					value
				}
				image {
					hash
					alt
				}
			}
			parent: parentable {
				... on Rubric {
					value
					slug
					parent: parentable {
						... on Catalog {
							value
							slug
						}
					}
				}
			}
		}
	}
`

export async function getOneCategory({ slug }) {
	const url = process.env.NEXT_PUBLIC_GRAPHQL
	const variables = {
		key: '1',
		slug
	}
	return await request(url, ONE_CATEGORY, variables)
}
