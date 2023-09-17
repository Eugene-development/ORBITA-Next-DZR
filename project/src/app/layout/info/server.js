'use server'
// TODO: Переместить файл
import { gql, request } from 'graphql-request'

const ALL_PRODUCTS = gql`
	query all_product {
		product {
			id
			value
			slug
			price {
				id
				value
			}
			unit {
				value
			}
		}
	}
`

export async function getAllProducts() {
	const url = process.env.NEXT_PUBLIC_GRAPHQL
	const variables = {
		key: '1'
	}
	return await request(url, ALL_PRODUCTS, variables)
}
