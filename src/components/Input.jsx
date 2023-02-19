import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Input = ({ getCity, city, onChange }) => {
	return (
		<div className='desktop:p-[0px] mobile:p-[20px]'>
			<div className='flex items-center desktop:w-[579px] gap-3 bg-white shadow-box rounded-[8px] p-4'>
				<input
					onChange={onChange}
					value={city}
					className='w-full bg-inherit outline-none focus:border-none'
					type='text'
				/>
				<button
					type='submit'
					onClick={getCity}
					className='text-[#1086FF] font-medium'>
					<FaSearch />
				</button>
			</div>
		</div>
	)
}

export default Input
