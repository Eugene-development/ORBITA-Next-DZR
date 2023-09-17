import { Address, Map } from '@/UI'

export const metadata = {
	title: '"Орбита-Строй" | Контакты магазина и базы строительных и отделочных материалов в Дзержинске',
	description:
		'База строительных и отделочных материалов в Дзержинске. Наш интернет магазин строительных и отделочных материалов предложит вам широчайший ассортимент и низкие цены на стройматериалы и комплектующие. Есть стройбаза со складом в черте города. Если Вы за городом, то можете купить стройматериалы с доставкой.'
}

export default () => {
	return (
		<>
			<Address />
			<Map />
		</>
	)
}
