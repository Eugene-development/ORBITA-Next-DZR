'use server'
import axios from 'axios'

const url = '/sendOrder'

const apiMAIL = {
	baseURL: process.env.NEXT_PUBLIC_MAIL,

	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY}`
	}
}

export async function send(data) {
	// console.log('123', url, data, apiMAIL)
	await axios.post(url, data, apiMAIL)
}
