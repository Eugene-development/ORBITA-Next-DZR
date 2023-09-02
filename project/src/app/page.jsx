import { Slider, MonthProduct, Testimonials, Appeal, Message, MainText } from '@/UI'

// const Test = () => {
// 	return (
// 		<>
// 			{'aaa' ?? 1} <br />
// 			{null ?? 2} <br />
// 			{null && 3} <br />
// 			{5 === 5 && 4} <br />
// 			{5 === 6 && 5} <br />
// 			{5 === 5 ? 6 : 7} <br />
// 			{5 === 6 ? 8 : 9} <br />
// 		</>
// 	)
// }

const sliders = [
	{
		id: 1,
		title: 'Стройматериалы',
		description: 'Широкий выбор строительных материалов для строительства и ремонта дома, а также для наружных и внутренних работ',
		image: 'https://colorprofi.ru/wp-content/uploads/2022/09/klassifikaciya-strojmaterialov.jpg'
	},
	{
		id: 2,
		title: 'Изоляция',
		description: 'Эффективные решения для тепло-, влаго- и звукоизоляции помещений высокого качества от передовых производителей',
		image: 'https://colorprofi.ru/wp-content/uploads/2022/09/klassifikaciya-strojmaterialov.jpg'
	},
	{
		id: 3,
		title: 'Отделка',
		description: 'Краски, линолеум, стеклообои и потолочные элементы для создания стильного интерьера вашего дома или офиса',
		image: 'https://colorprofi.ru/wp-content/uploads/2022/09/klassifikaciya-strojmaterialov.jpg'
	},
	{
		id: 4,
		title: 'Инструмент',
		description: 'Профессиональные и надежные ручные и электро инструменты для автоматизации и облегчения труда мастеров',
		image: 'https://colorprofi.ru/wp-content/uploads/2022/09/klassifikaciya-strojmaterialov.jpg'
	},
	{
		id: 5,
		title: 'Сантехника',
		description: 'Качественное сантехническое оборудование и аксессуары к ним для устройства систем водоснабжения',
		image: 'https://colorprofi.ru/wp-content/uploads/2022/09/klassifikaciya-strojmaterialov.jpg'
	},
	{
		id: 6,
		title: 'Электрика',
		description: 'Электротовары и кабельная продукция для безопасного и качественного электромонтажа различного класса сложности',
		image: 'https://colorprofi.ru/wp-content/uploads/2022/09/klassifikaciya-strojmaterialov.jpg'
	}
]

const Home = () => {
	return (
		<>
			<Slider sliders={sliders} />
			<MonthProduct />
			<Testimonials />
			<Appeal />
			<Message />
			<MainText />
		</>
	)
}

export default Home
