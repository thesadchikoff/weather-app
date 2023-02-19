import React from 'react'

const Container = ({ children }) => {
	return (
		<div className='desktop:p-[100px] mobile:p-[0px] flex overlay flex-col bg-[#498CEC] desktop:w-screen desktop:h-screen mobile:w-full mobile:h-full'>
			{children}
		</div>
	)
}

export default Container
