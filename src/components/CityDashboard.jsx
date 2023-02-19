import React from 'react'
import { FaCity } from 'react-icons/fa'
const CityDashboard = ({ cityName, setEdit }) => {
	return (
		<div className='flex items-center justify-between desktop:p-[0px] mobile:p-[20px]'>
			<div className='flex flex-col gap-3'>
				<h1 className='text-4xl font-bold text-white'>
					{cityName ? cityName : 'Загрузка города...'}
				</h1>
				<div className='flex flex-col gap-3'>
					<button
						onClick={setEdit}
						className='w-max text-white opacity-[0.6] cursor-pointer flex items-center gap-3'>
						<FaCity />
						Сменить город
					</button>
				</div>
			</div>
			<div></div>
		</div>
	)
}

export default CityDashboard
