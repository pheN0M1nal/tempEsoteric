import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const BlogListComp = () => {
	const dispatch = useDispatch()

	const blogsInfoFromLabel = useSelector(state => state.blogsInfoFromLabel)
	const { blogsInfo } = blogsInfoFromLabel

	return (
		<div style={{ backgroundColor: 'white' }}>
			{blogsInfo.map(blogInfo => (
				<>
					<img src={blogInfo.blogCoverImg} alt='' />
					<p>{blogInfo.blogName}</p>
					<p>{blogInfo.blog}</p>
				</>
			))}
		</div>
	)
}

export default BlogListComp
