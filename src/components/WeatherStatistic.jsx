import React from 'react'
import vlaga from '../assets/icons/vlaga.svg'
import cld from '../assets/icons/cld.svg'
import wnd from '../assets/icons/wnd.svg'
import termo from '../assets/icons/termo.svg'

const WeatherStatistic = ({
	all,
	loading,
	humidity,
	units,
	pressure,
	speed,
}) => {
	return (
		<div className='flex desktop:items-center mobile:items-start mobile:p-[20px] desktop:flex-row mobile:flex-col mobile:gap-14 mobile:justify-start bg-white desktop:justify-between mobile:text-black desktop:text-black desktop:p-10 desktop:rounded-xl  mobile:rounded-t-2xl'>
			<div className='flex items-center gap-5 desktop:text-center'>
				<img src={wnd} alt='weather icon' />
				<div className='flex flex-col'>
					<span className='text-[18px] opacity-[0.6]'>Ветер</span>
					{loading ? (
						'Загрузка...'
					) : (
						<span className='text-[20px] gilroy font-semibold'>
							{speed} {units === 'metric' ? 'м/с' : 'км/ч'}
						</span>
					)}
				</div>
			</div>
			<div className='flex items-center gap-5 desktop:text-center'>
				<img src={termo} alt='weather icon' />
				<div className='flex flex-col'>
					<span className='text-[18px] opacity-[0.6]'>Давление</span>
					{loading ? (
						'Загрузка...'
					) : (
						<span className='text-[20px] gilroy font-semibold'>
							{pressure} мм. рт. ст.
						</span>
					)}
				</div>
			</div>
			<div className='flex items-center gap-5 desktop:text-center'>
				<img src={vlaga} alt='weather icon' />
				<div className='flex flex-col'>
					<span className='text-[18px] opacity-[0.6]'>Влажность</span>
					{loading ? (
						'Загрузка...'
					) : (
						<span className='text-[20px] gilroy font-semibold'>
							{humidity}%
						</span>
					)}
				</div>
			</div>
			<div className='flex items-center gap-5 desktop:text-center'>
				<img src={cld} alt='weather icon' />
				<div className='flex flex-col'>
					<span className='text-[18px] opacity-[0.6]'>Облачность</span>
					{loading ? (
						'Загрузка...'
					) : (
						<span className='text-[20px] gilroy font-semibold'>{all}%</span>
					)}
				</div>
			</div>
		</div>
	)
}

export default WeatherStatistic
