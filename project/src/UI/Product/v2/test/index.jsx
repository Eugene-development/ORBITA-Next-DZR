'use client'
import { useState, useEffect } from 'react'

import { XMarkIcon } from '@heroicons/react/20/solid'

import { useInCart } from '@/app/(catalog)/shop/product/store'

const { inCart } = useInCart

export default function index({productID}) {

    const { statusButton, changeStatusButton } = inCart()
console.log(statusButton)
  //   const [domLoaded, setDomLoaded] = useState(false);

  //     useEffect(() => {
  //   setDomLoaded(true);
  // }, []);


  return (
    <>
{statusButton && <button
			onClick={changeStatusButton}
			type="button"
			className="relative isolate -m-3 p-3 focus-visible:outline-offset-[-4px] z-20"
		>
			<span className="sr-only">Закрыть форму</span>
			<XMarkIcon className="h-5 w-5 text-indigo-300 hover:text-red-400" aria-hidden="true" /><span className='text-red-800'>-{productID}</span>
		</button>}
        
    </>
  )
}
