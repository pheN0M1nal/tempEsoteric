import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    border: 1px solid #b3b3b3;
    border-radius: 2.5rem;
    background-color: transparent;
    height: 3rem;
    width: 100%;
    max-width: 23.9375rem;
    align-items: center;
    padding: 0 1rem;
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
    }
`;
export const Search = ({ fetchAndParseDataFromAPI, endpointQueryParam }) => {
    const [searchParam, setSearchParam] = useState("");
    const handleSearchInputChange = (e) => {
        let query = e.target.value;
        setSearchParam(e.target.value);
        handleSearch(query);
    };

    const handleSearch = (query) => {
        if (query) {
            endpointQueryParam.current = {
                ...endpointQueryParam,
                search: query,
            };
        } else {
            const tempData = {
                ...endpointQueryParam.current,
            };
            delete tempData["search"];
            endpointQueryParam.current = tempData;
        }
        fetchAndParseDataFromAPI();
    };
    return (
        <Wrapper>
            <input
                type="search"
                placeholder="Search User here.."
                value={searchParam}
                onChange={handleSearchInputChange}
            />
            <Button
                textTransform={"uppercase"}
                fontSize={12}
                maxWidth={100}
                height={24}
                onClick={(searchParam) => handleSearch}
            >
                Search
            </Button>
        </Wrapper>
    );
};
