import {
	Bars3Icon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
	UserIcon,
	XMarkIcon
} from '@heroicons/react/24/outline'
// import { getAllProducts } from '@/app/layout/info/server'
import { useStoreSearch } from '@/store/search'
const { visibleSearch } = useStoreSearch

export default function index() {
		const { openVisibleSearch } = visibleSearch()


		const handleSearch = () => {
		// console.log(getAllProducts())
		openVisibleSearch()
	}

  return (
   <div className="flex space-x-8">
		<button
			// onMouseEnter={() => setIsHovered(true)}
			onClick={handleSearch}
			className="-m-2 p-2 text-gray-400 hover:text-gray-500"
		>
			<span className="sr-only">Поиск</span>
			<MagnifyingGlassIcon
				className="h-6 w-6"
				aria-hidden="true"
			/>
		</button>
	</div>
  )
}
