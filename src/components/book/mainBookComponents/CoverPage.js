import { forwardRef } from 'react'
import styled from 'styled-components'
const CoverWrapper = styled.div`
	background-color:#DAA520;
	background-image: url(${props => props.bgimg});
	background-position: center;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	width: 100%;
	height: 100%;
`
export const PageCover = forwardRef((props, ref) => {
	// console.log(props?.bgimg, "bgimg");
	return (
		<div
			className={'page page-cover page-cover-' + props.pos}
			ref={ref}
			data-density='hard'
		>
			<CoverWrapper bgimg={props?.bgimg}>
				<div className='page-content'>
					<h2>{props?.title}</h2>
					{/* <img src={props?.bgimg} /> */}
				</div>
			</CoverWrapper>
		</div>
	)
})
