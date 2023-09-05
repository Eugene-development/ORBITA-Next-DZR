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
		description:
			'Широкий выбор строительных материалов для строительства и ремонта дома, а также для наружных и внутренних работ',
		image: 'https://colorprofi.ru/wp-content/uploads/2022/09/klassifikaciya-strojmaterialov.jpg'
	},
	{
		id: 2,
		title: 'Изоляция',
		description:
			'Эффективные решения для тепло-, влаго- и звукоизоляции помещений высокого качества от передовых производителей',
		image: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B8%D0%B7%D0%BE%D1%84%20%D1%84%D0%BE%D0%BB%D1%8C%D0%B3%D0%B0.jpg'
	},
	{
		id: 3,
		title: 'Отделка',
		description:
			'Краски, линолеум, стеклообои и потолочные элементы для создания стильного интерьера вашего дома или офиса',
		image: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/akvateks_-_ekstra_belyj_0_8_l_13845.jpg'
	},
	{
		id: 4,
		title: 'Инструмент',
		description:
			'Профессиональные и надежные ручные и электро инструменты для автоматизации и облегчения труда мастеров',
		image: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/mQ6tGoRY6s1SvjONBPrzIYmA5YrbTKfudwyMv63i.png'
	},
	{
		id: 5,
		title: 'Сантехника',
		description:
			'Качественное сантехническое оборудование и аксессуары к ним для устройства систем водоснабжения',
		image: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/SrrSRqPDaYGHpsFISosIAyp6dj6Z16Zz5evzuSJE.jpg'
	},
	{
		id: 6,
		title: 'Электрика',
		description:
			'Электротовары и кабельная продукция для безопасного и качественного электромонтажа различного класса сложности',
		image: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/vl0Pq4TSaUvulSLZbkYoMZsx4ZjS515UrV0rOiZj.jpg'
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
