'use client'

import { useEffect } from 'react'
// export const metadata = {
// 	title: 'Фабрика',
// 	description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
// 	robots: {
// 		index: false
// 	}
// }
function OutsideClickHandler({ onOutsideClick, children }) {
	useEffect(() => {
		function handleClickOutside(event) {
			if (event.target && !event.target.closest('.your-target-class')) {
				onOutsideClick()
			}
		}

		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [onOutsideClick])

	return <div>{children}</div>
}

export default function Outside() {
	function handleOutsideClick() {
		// Ваш код, который нужно выполнить при клике вне элемента
		console.log('123')
	}

	return (
		<div>
			<h1>Inside Component</h1>
			<OutsideClickHandler onOutsideClick={handleOutsideClick}>
				<div className="your-target-class">
					{/* Содержимое вашего целевого элемента */}
					<p>123</p>
				</div>
			</OutsideClickHandler>
		</div>
	)
}
