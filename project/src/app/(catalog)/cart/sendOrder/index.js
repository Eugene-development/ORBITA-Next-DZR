'use server'
import axios from 'axios'

const url = `/sendOrder`

// Текущая дата
var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1 // Месяцы в объекте Date нумеруются с 0, поэтому добавляем 1
var year = currentDate.getFullYear()
const date = day + '.' + month + '.' + year

const data = {
	date,
	products: $prodInCart,
	totalSum: totalSum,
	information: informationForm
}

const apiMAIL = {
	baseURL: process.env.NEXT_PUBLIC_MAIL,

	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY}`
	}
}

export async function send(data) {
	await axios.post(url, data, apiMAIL)
}
