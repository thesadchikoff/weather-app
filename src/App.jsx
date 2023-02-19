import { useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'
import { FaSnowflake, FaCity } from 'react-icons/fa'
import { GiWinterHat } from 'react-icons/gi'
import { BsThermometerHalf, BsCloudy } from 'react-icons/bs'
import { FaIcicles, FaLocationArrow, FaHatCowboySide } from 'react-icons/fa'
import { RiWindyLine } from 'react-icons/ri'
import { TbMist } from 'react-icons/tb'
import { WiHumidity } from 'react-icons/wi'
import WeatherAlert from './components/WeatherAlert'
import Input from './components/Input'
import CityDashboard from './components/CityDashboard'
import WeatherInfo from './components/WeatherInfo'
import WeatherStatistic from './components/WeatherStatistic'
import Container from './components/Container'
import Loader from './components/Loader'

function App() {
	const [edit, setEdit] = useState(false)
	const [cityData, setData] = useState([])
	const localCity = localStorage.getItem('cityStorage')
	const [city, setCity] = useState(localCity ? localCity : 'Калуга')
	const [units, setUnits] = useState('metric')
	const [error, setError] = useState(null)
	const [isLoading, setLoading] = useState(false)
	useEffect(() => {
		setLoading(true)
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=${units}&appid=477a0b8e8eaf4d6e906a24fab25ade18`
			)
			.then(res => {
				setData(res.data)
			})
			.catch(e => alert(e.message))
			.finally(() => {
				setLoading(false)
			})
	}, [units])

	const getCity = city => {
		setLoading(true)
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=${units}&appid=477a0b8e8eaf4d6e906a24fab25ade18`
			)
			.then(res => {
				setData(res.data)
				console.log(res.data)
			})
			.catch(res => {
				console.log(res)
				setError(res.response.data)
				viewError
			})
			.finally(() => {
				setEdit(false)
				setLoading(false)
			})
	}
	localStorage.setItem('cityStorage', city)
	const viewError = () => {
		setCity('')
		alert(error?.message)
	}
	const format = new Intl.DateTimeFormat('ru', {
		day: '2-digit',
		hour: 'numeric',
	})
	return (
		<Container>
			{cityData.name ? (
				<>
					{edit ? (
						<Input
							getCity={() => getCity(city)}
							city={city}
							onChange={e => setCity(e.target.value)}
						/>
					) : (
						<CityDashboard
							setEdit={() => setEdit(true)}
							cityName={cityData.name}
						/>
					)}
					<WeatherInfo
						main={cityData.weather[0].main}
						temp={cityData.main.temp}
						description={cityData.weather[0].description}
						feelsLike={cityData.main.feels_like}
						units={units}
						isLoading={isLoading}
					/>
					<WeatherStatistic
						all={cityData.clouds.all}
						loading={isLoading}
						humidity={cityData.main.humidity}
						pressure={cityData.main.pressure}
						speed={cityData.wind.speed}
						units={units}
					/>
				</>
			) : (
				<Loader />
			)}
		</Container>
	)
}

export default App
