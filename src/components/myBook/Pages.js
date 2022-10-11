import { forwardRef, useMemo, useState } from 'react'
import styled from 'styled-components'
import Pagination from '../Global/pagination/Pagination'
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
`
export const Page = forwardRef((props, ref) => {
	const [currentPage, setCurrentPage] = useState(1)
	let bodyData = props?.data?.imgList && props?.data?.imgList
	console.log(typeof bodyData?.length, 'props.data')
	// console.log(bodyData, "bodyData");
	// let PageSize = 4
	// const currentTableData = useMemo(() => {
	// 	const firstPageIndex = (currentPage - 1) * PageSize
	// 	const lastPageIndex = firstPageIndex + PageSize
	// 	return bodyData && bodyData?.slice(firstPageIndex, lastPageIndex)
	// }, [currentPage, bodyData])
	return (
		<div
			className='page softPage'
			ref={ref}
			data-density={props.density | 'soft'}
		>
			<PageWrapper imag={props?.data.borderImg}>
				<div className='pageContentOuter'>
					<h2 className='page-header'>
						Page header - {props.number + 1}
					</h2>
					<h2 className='pageTitle'> {props.data.title}</h2>
					{props?.data?.imgList ? (
						props?.data?.imgList?.map((item, i) => {
							return (
								<div key={i} className='imageOuterList'>
									<img src={item.image} alt='1' />
								</div>
							)
						})
					) : (
						<div className='imageOuter'>
							<img src={props?.data?.image} alt='1' />
						</div>
					)}
					<div className='page-text'>{props.data.desc}</div>
					<div className='page-footer'>{props.number + 1}</div>
					{/* <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={bodyData?.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
            /> */}
				</div>
			</PageWrapper>
		</div>
	)
})
