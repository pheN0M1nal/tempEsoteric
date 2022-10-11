import React from 'react'
import { Page } from './Pages'
import { pages } from '../../config/DataList/UserList'
import { useParams } from 'react-router'
import { useEffect } from 'react'

const PageComp = book => {
	//initializing useParms
	const params = useParams()

	// getting pageNumber to goto
	const pageNumber = params.pageNumber
	console.log(pageNumber)

	useEffect(() => {
		pageNumber && book.current.pageFlip().flip(pageNumber, ['top'])
	}, [pageNumber])

	return (
		<div>
			{pages.map((item, index) => (
				<Page
					key={index}
					data={item}
					className='page'
					number={index}
				></Page>
			))}
		</div>
	)
}

export default PageComp
