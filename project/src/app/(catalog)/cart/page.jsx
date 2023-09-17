import { Cart } from '@/UI'

export const metadata = {
	title: 'Корзина',
	description: 'Корзина нашего интернет магазина',
	robots: {
		index: false
	}
}

export default function page() {
	return <Cart />
}
