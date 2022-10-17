import { forwardRef, useMemo, useState, useEffect } from 'react'
import Records from './components/Records'
import Pagination from './components/Pagination'
import menuItems from '../../../DataList/menuItems'
import styled from 'styled-components'
import axios from 'axios'
const PageWrapper = styled.div`
	${
		'' /* width: 93%;
    height: 94.7%; */
	}
	width: 100%;
	height: 100%;
	padding: 15%;
	position: relative;
	display: flex;
	justify-self: center;
	align-items: center;
	top: auto;
	bottom: auto;
	margin: auto;
	background-position: center;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-image: url(${props => props.imag});
	border: 2px solid #00ff00;
	.pageContentOuter {
		text-align: center;
		margin: 0 auto;
		height: 100%;
		overflow: auto;
		.imageOuter {
			width: 300px;
			height: 200px;
			overflow: hidden;
			img {
				padding: 1rem;
				border: 1px solid #ff0000;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.imageOuterList {
			width: 300px;
			height: 300px;
			overflow: hidden;
			margin: 0.5rem auto;
			img {
				padding: 1rem;
				border: 1px solid #ff0000;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
	.line {
		width: 30px;
		height: 100%;
		background-color: yellow;
		position: absolute;
	}
`
export const Page = forwardRef((props, ref) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [recordsPerPage] = useState(10)

	const cancelToken = axios.CancelToken.source()
	const get = async cp => {
		const api = `https://jsonplaceholder.typicode.com/photos/${cp}`

		console.log(api)

		try {
			const data = await axios.get(api, {
				cancelToken: cancelToken.token,
			})
			setData([data.data])
		} catch (error) {
			axios.isCancel(error) && console.log('error: ', error)
		}
	}

	// useEffect(() => {
	// 	get(1)
	// }, [])

	useEffect(() => {
		get(currentPage)
		//console.log(currentPage)
		return () => {
			cancelToken.cancel()
		}
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
			<PageWrapper imag={''}>
				<div>
					<h2>{props.data.name}</h2>
					<Records data={data} currentPage={currentPage} />
					<Pagination
						nPages={nPages}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</div>
				<div className='line'></div>
			</PageWrapper>
		</div>
	)
})
