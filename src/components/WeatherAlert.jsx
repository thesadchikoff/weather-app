import React from 'react'

const WeatherAlert = ({ children, icon }) => {
	return (
		<div className='p-3 mt-5 shadow-lg rounded-lg flex items-center max-w-[250px] gap-2 bg-white'>
			<div className='text-2xl'>{icon}</div>
			{children}
		</div>
	)
}

export default WeatherAlert
