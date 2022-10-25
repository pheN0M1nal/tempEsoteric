import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const BlogComp = () => {
	const blogInfo = useSelector(state => state.blog)

	const { blog } = blogInfo

	useEffect(() => {
		console.log(blog)
	}, [blog])

	return (
		<div
			style={{
				backgroundColor: 'white',
				alignItems: 'center',
				textAlign: 'center',
				padding: '20px',
			}}
		>
			<h1>{blog?.title}</h1>
			<img src={blog?.mainImage} alt='Blog Image' />
			<p>{blog?.body}</p>
		</div>
	)
}

export default BlogComp
