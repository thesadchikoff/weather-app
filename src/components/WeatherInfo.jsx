import React from 'react'
import cloudy from '../assets/icons/cloudy.svg'
import clear from '../assets/icons/clear.svg'
import snow from '../assets/icons/snow.svg'
import rain from '../assets/icons/rain.svg'
import haze from '../assets/icons/hazzy.svg'
import mist from '../assets/icons/mist.svg'
import thunderstorm from '../assets/icons/thunderRain.svg'
import dust from '../assets/icons/dust.svg'
import smoke from '../assets/icons/smoke.svg'
import drizzle from '../assets/icons/drizzle.svg'
import cloudsun from '../assets/icons/cloudsun.svg'
import WeatherAlert from './WeatherAlert'
import hot from '../assets/icons/hot.svg'
import cold from '../assets/icons/cold.svg'

const WeatherInfo = ({
	main,
	feelsLike,
	temp,
	description,
	units,
	isLoading,
}) => {
	const getAlert = temp => {
		if (temp < 0) {
			return (
				<WeatherAlert icon={<img src={cold} alt='weather icon' />}>
					<span className='text-xs text-black opacity-[0.7] text-semibold'>
						На улице сейчас холодновато, рекомендуем одеться потеплее
					</span>
				</WeatherAlert>
			)
		}
		if (temp > 0) {
			return (
				<WeatherAlert icon={<img src={hot} alt='weather icon' />}>
					<span className='text-xs text-black opacity-[0.7] text-semibold'>
						На улице сейчас тепло, отличное время прогуляться
					</span>
				</WeatherAlert>
			)
		}
		if (Number(temp) < -15) {
			return (
				<WeatherAlert icon={<FaIcicles />}>
					<span className='text-xs'>
						На улице наблюдается сильный мороз, рекомендуем заварить чай и
						посмотреть пару сериалов 🤒
					</span>
				</WeatherAlert>
			)
		}
	}
	const getIcon = weather => {
		switch (weather) {
			case 'Clouds':
				return <img src={cloudy} alt='weather icon' />
			case 'Snow':
				return <img src={snow} alt='weather icon' />
			case 'Clear':
				return <img src={clear} alt='weather icon' />
			case 'Rain':
				return <img src={rain} alt='weather icon' />
			case 'Haze':
				return <img src={haze} alt='weather icon' />
			case 'Drizzle':
				return <img src={drizzle} alt='weather icon' />
			case 'Thunderstorm':
				return <img src={thunderstorm} alt='weather icon' />
			case 'Mist':
				return <img src={mist} alt='weather icon' />
			case 'Dust':
				return <img src={dust} alt='weather icon' />
			case 'Smoke':
				return <img src={smoke} alt='weather icon' />
			default:
				return <img src={cloudsun} alt='weather icon' />
		}
	}
	return (
		<section className='desktop:flex-1 mobile:mt-[150px] mobile:mb-[50px] flex flex-col gap-5 items-center text-white justify-center'>
			{isLoading ? (
				<span>Данные загружаются...</span>
			) : (
				<>
					<div className='flex items-center gap-3 text-5xl'>
						{getIcon(main)}
						{Math.floor(temp)} {units === 'metric' ? '°' : '°F'}
					</div>
					<span className='opacity-[0.6]'>
						Ощущается как {Math.floor(Number(feelsLike))}{' '}
						{units === 'metric' ? '°' : '°F'}
					</span>
					<span>{description}</span>
					<div>{getAlert(temp)}</div>
				</>
			)}
		</section>
	)
}

export default WeatherInfo
