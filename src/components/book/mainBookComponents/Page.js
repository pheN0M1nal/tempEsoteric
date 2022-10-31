import { forwardRef, useState, useEffect } from 'react';
import Records from './components/Records';
import styled from 'styled-components';
import { Spinner } from '../../Global/Spinner';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchContent } from '../../../store/actions/contentActions';
import BlogComp from '../../blogComponents/BlogComp';

const PageWrapper = styled.div`
	width: 100%;
	height: 100%;
	border: 8px solid var(--custom-orange-color);
	border-width: ${props =>
		props.pageNumber % 2 === 0 ? `8px 8px 8px 0` : '8px 0 8px 8px'};
	background-color: #00ff00;
	/* padding-left: 5%;	 */
	position: relative;
	display: flex;
	flex-direction: column;
	justify-self: center;
	align-items: center;
	z-index: 2 !important;
	top: auto;
	bottom: auto;
	margin: auto;

	.pageInner {
		background-position: center;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-image: url(${props => props?.imag});
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-self: center;
		align-items: center;
		padding: 10% 13%;
		.contentOuter {
			text-align: center;
			height: 95%;
			width: 100%;
			position: relative;
			z-index: 5;
			.pageContentOuter {
				text-align: center;
				margin: 0 auto;
				height: 100%;
				overflow: auto;
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				position: relative;
			}
			.heading {
				font-size: 1.4rem;
				@media (max-width: 500px) {
					font-size: 1rem;
				}
			}
			.word1 {
				font-size: 1.2rem !important;
			}
			.word2 {
				font-size: 1.1rem !important;
			}
		}
	}

	.page-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.3rem;
		border-radius: 50%;
		z-index: 1;
		position: absolute;
		bottom: 2%;
		right: 3%;
		width: 25px;
		height: 25px;
	}
	.pageNumber {
		display: flex;
		width: 100%;

		padding: 0rem;
		span {
			background-color: #daa520;
			color: #000;
			width: 25px;
			height: 25px;
			border-radius: 2.4rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.oddPage {
		padding-right: 0rem;
		justify-content: end;
	}
	.evenPage {
		justify-content: start;
		padding-left: 2rem;
	}
	::-webkit-scrollbar {
		background: var(--custom-input-border);
		height: 4px;
		width: 4px;
		margin: 0;
		padding: 0;
		border-radius: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: var(--custom-input-border);
		height: 4px;
		width: 4px;
		margin: 0;
		padding: 0;
		border-radius: 5px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: var(--custom-orange-color);
		height: 0px;
		width: 0px;
		margin: 0;
		padding: 0;
		border-radius: 5px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: var(--custom-orange-color);
		height: 4px;
		width: 0px;
		margin: 0;
		padding: 0;
		border-radius: 5px;
	}
`;
export const Page = forwardRef((props, ref) => {
	// initializing
	const [paginationCurrentPage, setPaginationCurrentPage] = useState(1);
	const dispatch = useDispatch();

	// assigning values
	const pageNumber = props.data.pageNumber;

	const contentData = useSelector(state => state.content);
	var indexPageNum = contentData.content.findIndex(
		item => item.pageNumber === pageNumber
	);

	// className For blog page
	const classNameForBlog = `blog_open_${pageNumber}`;

	if (indexPageNum === -1) {
		indexPageNum = 0;
	}

	const {
		loading,
		pageContent: content,
		page,
		section,
		count,
		pageClass,
	} = contentData.content[indexPageNum];

	useEffect(() => {
		dispatch(fetchContent(pageNumber, paginationCurrentPage));
	}, [paginationCurrentPage, dispatch, pageNumber]);

	const blogCont = {
		title: 'From The Dashboariosa 2.0!”',
		mainImage: 'main-image.jpg',
		body: 'ddd',
	};

	return (
		<div
			className={`page softPage ${pageNumber}`}
			ref={ref}
			data-density={props.data.density | 'soft'}>
			<PageWrapper imag={props?.data?.imag} pageNumber={pageNumber}>
				<div className='pageInner'>
					<div className='contentOuter'>
						<h2
							className={`heading ${
								props.data.name.length < 40
									? ''
									: props?.data?.name.length >= 41 ||
									  props?.data?.name.length <= 80
									? 'word1'
									: 'word2'
							}`}>
							{props.data.name}
						</h2>
						{loading ? (
							<Spinner size={5} />
						) : (
							<>
								{pageNumber === 6 ? (
									<BlogComp blog={blogCont} />
								) : pageNumber === 8 ? (
									<BlogComp blog={blogCont} />
								) : pageNumber === 10 ? (
									<BlogComp blog={blogCont} />
								) : (
									<>
										<Records
											count={count}
											data={content}
											paginationCurrentPage={paginationCurrentPage}
											setPaginationCurrentPage={setPaginationCurrentPage}
										/>
									</>
								)}
							</>
						)}
					</div>
				</div>
				<div
					className={`page-footer pageNumber ${
						props?.data?.pageNumber % 2 === 0 ? 'oddPage' : 'evenPage'
					}`}>
					<span>{props?.data?.pageNumber}</span>
				</div>
			</PageWrapper>
		</div>
	);
});
