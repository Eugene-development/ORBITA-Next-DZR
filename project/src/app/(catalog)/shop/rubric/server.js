import { gql, request } from 'graphql-request'

const ONE_CATALOG = gql`
	query catalog($slug: String!, $key: String!) {
		catalog_one(slug: $slug, key: $key) {
			value
			rubric {
				value
				slug
				category {
					value
				}
			}
			text {
				value
			}
		}
	}
`

export async function getOneCatalog({ slug }) {
	const url = process.env.NEXT_PUBLIC_GRAPHQL
	const variables = {
		key: '1',
		slug
	}
	return await request(url, ONE_CATALOG, variables)
}
