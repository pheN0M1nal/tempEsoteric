const BlogComp = ({ blog }) => {
	console.log(blog)

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
			<img src={blog?.mainImage} alt='Blog' />
			<p>{blog?.body}</p>
		</div>
	)
}

export default BlogComp
