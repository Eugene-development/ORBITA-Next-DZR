import { gql, request } from 'graphql-request'

const ONE_RUBRIC = gql`
	query rubric($slug: String!, $key: String!) {
		rubric_one(slug: $slug, key: $key) {
			value
			text {
				key
				value
			}
			category {
				value
				slug
				product {
					value
					price {
						value
					}
				}
			}
			parent: parentable {
				... on Catalog {
					value
					slug
				}
			}
		}
	}
`

export async function getOneRubric({ slug }) {
	const url = process.env.NEXT_PUBLIC_GRAPHQL
	const variables = {
		key: '1',
		slug
	}
	return await request(url, ONE_RUBRIC, variables)
}
