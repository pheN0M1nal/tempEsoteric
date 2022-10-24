import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchBlogFromLabel,
	fetchLabels,
} from '../../store/actions/blogsActions'

const Labels = () => {
	const dispatch = useDispatch()

	const labels = useSelector(state => state.blogLabels)
	const { blogLabels } = labels

	useEffect(() => {
		dispatch(fetchLabels())
	}, [])

	const loadBlogInfo = label => {
		dispatch(fetchBlogFromLabel(label))
	}

	return (
		<div style={{ backgroundColor: 'white' }}>
			{blogLabels.map(label => (
				<>
					<button
						onClick={() => loadBlogInfo(label.search_value)}
					>
						{label.name}({label.quantity})
					</button>
					<p></p>
				</>
			))}
		</div>
	)
}

export default Labels
