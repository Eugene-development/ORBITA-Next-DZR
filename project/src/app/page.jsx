import { Slider, Testimonials, Appeal } from '@/UI'

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
		description: 'Строительные материалы для наружных и внутренних работ',
		image: 'https://colorprofi.ru/wp-content/uploads/2022/09/klassifikaciya-strojmaterialov.jpg'
	},
	{
		id: 2,
		title: 'Изоляция',
		description: 'Изоляционные материалы для работ по ветро, шумо, влаго- защите',
		image: 'https://colorprofi.ru/wp-content/uploads/2022/09/klassifikaciya-strojmaterialov.jpg'
	},
	{
		id: 3,
		title: 'Отделка',
		description: 'Отделочные материалы для нанесения декоротивных слоёв',
		image: 'https://colorprofi.ru/wp-content/uploads/2022/09/klassifikaciya-strojmaterialov.jpg'
	},
	{
		id: 4,
		title: 'Инструмент',
		description: 'Ручные инструменты для автоматизации и облегчения труда рабочих',
		image: 'https://colorprofi.ru/wp-content/uploads/2022/09/klassifikaciya-strojmaterialov.jpg'
	},
	{
		id: 5,
		title: 'Сантехника',
		description: 'Санитарно-технические материалы для водоотведения',
		image: 'https://colorprofi.ru/wp-content/uploads/2022/09/klassifikaciya-strojmaterialov.jpg'
	},
	{
		id: 6,
		title: 'Электрика',
		description: 'Электротовары для специализированных работ с электричеством',
		image: 'https://colorprofi.ru/wp-content/uploads/2022/09/klassifikaciya-strojmaterialov.jpg'
	}
]

const Home = () => {
	return (
		<>
			<Slider sliders={sliders} />
			<Testimonials />
			<Appeal/>
		</>
	)
}

export default Home
