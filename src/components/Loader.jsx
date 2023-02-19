import React from 'react'
import { FiInfo } from 'react-icons/fi'
const Loader = () => {
	return (
		<div className='px-4'>
			<div className='flex desktop:items-center mobile:items-center mobile:p-[20px] desktop:flex-row mobile:flex-row mobile:gap-3 mobile:justify-start desktop:justify-center text-white desktop:p-10 desktop:rounded-xl  mobile:rounded-2xl mt-5 mobile:w-full desktop:h-max mobile:bg-white mobile:text-black'>
				<FiInfo className='text-blue-600 text-xl font-bold' />
				<h1 className='font-semibold opacity-[0.6]'>Загрузка приложения...</h1>
			</div>
		</div>
	)
}

export default Loader
