import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import dummyImage from '../../static/images/pics/31.jpg'
const StyledComponent = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1.5rem;

	.controlsWrapperImage {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: flex-start;

		.text {
			color: var(--custom-white);
			font-weight: 600;
			font-size: 0.7rem;
		}

		.chooseImageButtonWrapper {
			position: relative;

			input {
				cursor: pointer;
				opacity: 0;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				left: 0;
				z-index: 30;
			}
		}
	}

	.imageWrapper {
		width: 2.5rem;
		height: 2.5rem;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			/* border-radius: 50%; */
		}
	}
`

export const ImagePickerComponent = ({
	//setShowImage,
	image,
	setImage,
	label,
	btnText,
	disabled,
}) => {
	const [tempImage, setTempImage] = useState(null)
	const [tempImageData, setTempImageData] = useState('')

	useEffect(() => {
		if (tempImage) {
			const fileReader = new FileReader()
			fileReader.addEventListener(
				'load',
				() => {
					setTempImageData(fileReader.result)
					//setShowImage(fileReader.result)
				},
				false
			)

			fileReader.readAsDataURL(tempImage)

			if (tempImage) setImage(tempImage)
		}
	}, [tempImage])
	useEffect(() => {
		if (disabled == true) {
			setTempImage(null)
			setImage(null)
		}
	}, [disabled])
	return (
		<StyledComponent>
			<div className='controlsWrapperImage'>
				<span className='text'>
					{!disabled
						? image?.name || 'Select profile image'
						: (label && label) || 'Select profile image'}
				</span>
				<div className='chooseImageButtonWrapper'>
					<Button
						fontSize={0.7}
						paddingTopBottom={0.4}
						paddingLeftRight={1.5}
					>
						{btnText}
					</Button>
					<input
						type={`${!disabled && 'file'}`}
						onChange={e => {
							setTempImage(e.target.files[0])
						}}
					/>
					<div className='imageWrapper'>
						<img
							src={tempImageData || image || dummyImage}
							alt={''}
						/>
					</div>
				</div>
			</div>
		</StyledComponent>
	)
}
