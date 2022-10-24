import React from 'react'
import BlogListComp from '../components/blogComponents/BlogListComp'
import Labels from '../components/blogComponents/Labels'

const BlogsScreen = () => {
	return (
		<>
			<Labels />
			<div style={{ backgroundColor: 'red' }}>..</div>
			<BlogListComp />
		</>
	)
}

export default BlogsScreen
