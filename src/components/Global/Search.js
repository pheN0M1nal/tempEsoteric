import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	border: 1px solid var(--custom-border-color);
	border-radius: 2.5rem;
	background-color: var(--custom-light-bg);
	height: 3rem;
	width: 100%;
	max-width: 23.9375rem;
	align-items: center;
	padding: 0 1rem;
	&:hover,
	&:active {
		box-shadow: var(--custom-shadow);
	}
	input {
		border: none;
		outline: none;
		text-indent: 0.2rem;
		width: 100%;
		background: transparent;
	}
	button {
		border-radius: 2.5rem;
		padding: 0.1rem 0.3rem;
		&:hover,
		&:active {
			box-shadow: var(--custom-shadow);
		}
	}
`
export const Search = ({ fetchAndParseDataFromAPI, endpointQueryParam }) => {
	const [searchParam, setSearchParam] = useState('')
	const handleSearchInputChange = e => {
		setSearchParam(e.target.value)
	}

	const handleSearch = query => {
		if (query) {
			endpointQueryParam.current = {
				...endpointQueryParam,
				search: query,
			}
		} else {
			const tempData = {
				...endpointQueryParam.current,
			}
			delete tempData['search']
			endpointQueryParam.current = tempData
		}
		fetchAndParseDataFromAPI()
	}
	return (
		<Wrapper>
			<input
				type='search'
				placeholder='Enter page number ...'
				value={searchParam}
				onChange={handleSearchInputChange}
			/>
			<Button
				textTransform={'uppercase'}
				fontSize={12}
				maxWidth={100}
				height={24}
				onClick={searchParam => handleSearch}
			>
				Goto
			</Button>
		</Wrapper>
	)
}
