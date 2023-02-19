import React from 'react'

const Loader = () => {
	return (
		<div className='flex desktop:items-center mobile:items-start mobile:p-[20px] desktop:flex-row mobile:flex-col mobile:gap-14 mobile:justify-center desktop:justify-center text-white desktop:p-10 desktop:rounded-xl  mobile:rounded-t-2xl text-center'>
			<h1>Загрузка приложения. Ожидайте...</h1>
		</div>
	)
}

export default Loader
