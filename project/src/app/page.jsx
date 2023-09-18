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
			'Широкий выбор строительных материалов для строительства и ремонта дома, а также для наружных и внутренних строительных и отделочных работ',
		image: 'https://yandex-images.clstorage.net/9p7Exg370/cb6c95Bpni/YcrB4s9dLh642Z8JUEvo44T8zjNXK6r62FLrs2Rdo6Kb-56mXtSJBGqmrWBTpmBFF-xQzyLymBQ5DLS8-QSPsyOdhLCIA2kevc3UAxxR5PORsNNwQmmz_t8L5-QLN4bTvJTply6j-S528qc1BO9_A1PSNo507O4FCg63pMBt8vNayfT78U1XMr_79wV8ac_Mq5foI293gIPQQJC7MBGqyrmM8LIAkeAMR8eGHgLxCxtW-QL6eMPmJDgKkrHDQ9XbUd_g1s5bcTaaz9A3WkjvypCr0C9tVLCq9m60pBYOjdSRofOGJZ7XBGjJiiAl5zw2ceUo6FfH8iEtJLCz32P99EP7xcTuVmYQidjZCFtt79yznvMQdE-ojNJBpqcaAbDVl7nxsACM6SVW9YMQD-ciBm_jIsld-eYNOA-Uq_F93c5S2N7z0315O5LzwQJ9cvXSpYvXOlRJs6D3dJChOCGO26iz1Z83q-IJffiuBCn2HTxs7iT5f-7HNzoFhIzFbMX2fMDzx8VodgSq4dgFSEfb9amT5jNLXoeK5GOljSEfkdyOvOSiFKP-Mk7YnDwM9CYWYsA_4UHn2jQtPYyX9kLBwHvj2e30aFkSnd_0E3Vu5tGdoe45eXy3rP9epJkXIKnVnJvgvRSi9wlD_rAmMeMgJ0nUPOpD5MovNAWZmf9dxft--9jt8m1pA4_n1gddV-DxnpTDM2FDsqLGeYGVJgGX9b-c3LEeptwKf9SbIQ7_EAZL_jn0Uf3cIDwZnInYTsLWR_PlyM9Dahqu7ME8ZUTd862W1i5OYruHx2aykhMGjtOVkvCuEbPZMnzVoBks5ws0VdkkyWvfwSYaHZCz70vg4lrM5vvRTWYDtvjdBlZBw_-Pv9YSVlaMk_J6lZA5LKXHmL7xsCKc1StDw58_Ivg_P0reHsR-4sIWGy-CifJP2fVjwPzZ_G1WCa7I-hlmQ9_VkLriBHpHsaL3TqeaLCQ',
		href: 'stroymaterialy'
	},
	{
		id: 2,
		title: 'Изоляция',
		description:
			'Эффективные решения для тепло-, влаго- и звукоизоляции помещений высокого качества от передовых производителей изоляционных материалов',
		image: 'https://liderdara.ru/wp-content/uploads/58887779.jpg',
		href: 'izolyatsiya'
	},
	{
		id: 3,
		title: 'Отделка',
		description:
			'Краски, линолеум и плинтуса, стеклообои и потолочные элементы для создания стильного интерьера и экстерьера вашего жилого дома или офиса',
		image: 'https://yandex-images.clstorage.net/9p7Exg370/cb6c95Bpni/YcrB4s9dLh642Z8JUEvo44T8zjNXK6r62FLrtmZfo_TLr5ajBteBAW6n-2RYp2hJE7wNn3eimhc-X-7OoRCAsCGdhK7UQ2EUudmcBFlQ4eSP9ME7Uz-t-IAFiYgVKYXNsZnvgi6qyQFh96wpT-UkLnmtDtZW5P4WPiqDp9FZ--FW0_ng6m9jIprf_Dxyb9vDtKfsJWBCorP3WrKuOTCA1ai8wbA3iPg0QNyqNzv9IQVN2QL5XsXMEhs_gIn2cfD3Qv7G9sxrRha97dodUmng_4yr7gZQa4Sd00WUsR4uqPiriOS_AIDXOkzijSEM0AYZZ8st_UrA2Tw5PZyp3l7i02fs5vvbTVUBtNLbOFJ_w8qvlPcdSE2gssFGmL4jL67gqb7BrT6h6QZF0qchEuAYH23qJ8Ne7MwXHSWyt_5k8_B829vQxGZOKqzY_SdIcdXfi77XG1NhhYf3QLqeHSGR6o2R9oo1jcILaMaBMC3aGxJr2gXUf9bOHQ0ChqbmXN3oUe_NxctZdji138gSZlbZx7q3yAxnS5aQwmyjoAImt-W8rNWCKbbxK1r-pDIW8BU8cMI73WLV2SUFGbWI4mray3vF_MXkT0EGmcn1O1ty7fWyvfouV22NrcN4lZ86L6XCuLPVgyCN_A125JklEME-KHPJOd5yzsAdEBe8l-ZR39N6xfrA1F5TPrvd3QJdUu7An7fiEVJjtIrmdKS-BA-GxYS_34cLjsAnXeOmOSDgPAJ21yvHZMHIARUHm4ThfObbR-DH7tdHcjWs5uURYFDdwoqqzTBbRrWV1XORuR0prMuooNCSDrbDJmbbhCE70iIla-oR5XnH7gUZPayBw0j75ETT2eDbXmohsNzWFH5c_-uKltUEbFKAifJxu5M2PaHnqb7jvQKv_DBZ_Yo-D9k9IlHnBNh69-83Cwexhfpfwuhe8fTA61RyEZfD5hZiduDuvoD5FVFjhb3Ae66bIys',
		href: 'otdelka'
	},
	{
		id: 4,
		title: 'Инструмент',
		description:
			'Профессиональные и надежные ручные и электро инструменты для автоматизации и облегчения труда мастеров по очень доступным ценам',
		image: 'https://yandex-images.clstorage.net/9p7Exg370/cb6c95Bpni/YcrB4s9dLh642Z8JUEvo44T8zjNXK6r62FLr5mJb_6TO-pfxVtCBBD6i_GUA8TUXRe4LmXDwzhZuXOe8-QSBtiCegLWEA2kevc3UAxxR5PORsNNwQmmz_t8L5-QLN4bTvJTply6j-S528qc1BO9_A1PSNo507O4FCg63pMBt8vNayfT78U1XMr_79wV8ac_Mq5foI293gIPQQJC7MBGqyrmM8LIAkeAMR8eGHgLxCxtW-QL6eMPmJDgKkrHDQ9XbUd_g1s5bcTaaz9A3WkjvypCr0C9tVLCq9m60pBYOjdSRofOGJZ7XBGjJiiAl5zw2ceUo6FfH8iEtJLCz32P99EP7xcTuVmYQidjZCFtt79yznvMQdE-ojNJBpqcaAbDVl7nxsACM6SVW9YMQD-ciBm_jIsld-eYNOA-Uq_F93c5S2N7z0315O5LzwQJ9cvXSpYvXOlRJs6D3dJChOCGO26iz1Z83q-IJffiuBCn2HTxs7iT5f-7HNzoFhIzFbMX2fMDzx8VodgSq4dgFSEfb9amT5jNLXoeK5GOljSEfkdyOvOSiFKP-Mk7YnDwM9CYWYsA_4UHn2jQtPYyX9kLBwHvj2e30aFkSnd_0E3Vu5tGdoe45eXy3rP9epJkXIKnVnJvgvRSi9wlD_rAmMeMgJ0nUPOpD5MovNAWZmf9dxft--9jt8m1pA4_n1gddV-DxnpTDM2FDsqLGeYGVJgGX9b-c3LEeptwKf9SbIQ7_EAZL_jn0Uf3cIDwZnInYTsLWR_PlyM9Dahqu7ME8ZUTd862W1i5OYruHx2aykhMGjtOVkvCuEbPZMnzVoBks5ws0VdkkyWvfwSYaHZCz70vg4lrM5vvRTWYDtvjdBlZBw_-Pv9YSVlaMk_J6lZA5LKXHmL7xsCKc1StDw58_Ivg_P0reHsR-4sIWGy-CifJP2fVjwPzZ_G1WCa7I-hlmQ9_VkLriBHpHsaL3TqeaLCQ',
		href: 'instrument'
	},
	{
		id: 5,
		title: 'Сантехника',
		description:
			'Качественное сантехническое оборудование и аксессуары к ним для устройства систем водоснабжения жилых и коммерческих помещений',
		image: 'https://www.stroymix67.ru/files/gallery/29861/preview/30165d95782ad1222_1597672728.png',
		href: 'santehnika'
	},
	{
		id: 6,
		title: 'Электрика',
		description:
			'Электротовары и кабельная продукция для безопасного и качественного электромонтажа различного класса сложности по риемлемым ценам',
		image: 'https://avatars.mds.yandex.net/i?id=7c99fdfb50a50935da3b12a401e3cf89_l-8209870-images-thumbs&n=13',
		href: 'elektrotovary'
	}
]

export const metadata = {
	title: 'База строительных материалов в Дзержинске | Купите строительные материалы в интернет-магазине "Орбита-строй"',
	description:
		'База строительных и отделочных материалов в Дзержинске. Наш интернет магазин строительных и отделочных материалов предложит вам широчайший ассортимент и низкие цены на стройматериалы и комплектующие. Есть стройбаза со складом в черте города. Если Вы за городом, то можете купить стройматериалы с доставкой.'
}

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
