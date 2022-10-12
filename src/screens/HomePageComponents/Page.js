import { forwardRef, useMemo, useState, useEffect } from 'react'
import Records from './components/Records'
import Pagination from './components/Pagination'
import menuItems from '../../DataList/menuItems'
import axios from 'axios'

export const Page = forwardRef((props, ref) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [recordsPerPage] = useState(10)

	const get = async cp => {
		const api = `https://jsonplaceholder.typicode.com/photos/${cp}`

		console.log(api)

		try {
			const data = await axios.get(api)
			setData([data.data])
		} catch (error) {
			console.log('error: ', error)
		}
	}

	// useEffect(() => {
	// 	get(1)
	// }, [])

	useEffect(() => {
		get(currentPage)
		//console.log(currentPage)
	}, [currentPage])

	const indexOfLastRecord = currentPage * recordsPerPage
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
	const nPages = 5

	return (
		<div
			className='page softPage'
			ref={ref}
			data-density={props.data.density | 'soft'}
		>
			<h2>{props.data.name}</h2>
			<Records data={data} currentPage={currentPage} />
			<Pagination
				nPages={nPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	)
})
