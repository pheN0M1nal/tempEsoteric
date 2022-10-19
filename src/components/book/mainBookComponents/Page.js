import { forwardRef, useMemo, useState, useEffect } from "react";
import Records from "./components/Records";
import Pagination from "./components/Pagination";
import menuItems from "../../../DataList/menuItems";
import styled from "styled-components";
import axios from "axios";
const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    /* border: 8px solid #DAA520;
	border-width: ${(props) => (props.pageNumber % 2 === 0 ? `8px 8px 8px 0` : "8px 0 8px 8px")}; */
    background-color: #00ff00;
    /* padding-left: 5%;	 */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    top: auto;
    bottom: auto;
    margin: auto;

    .pageInner {
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url(${(props) => props?.imag});
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-items: center;
        padding: 10% 13%;
    }
    .pageContentOuter {
        text-align: center;
        margin: 0 auto;
        height: 100%;
        overflow: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .heading {
        font-size: 1.4rem;
		@media (max-width:500px) {
			font-size: 1rem;
			
		}
    }
    .word1 {
        font-size: 1.2rem !important;
    }
    .word2 {
        font-size: 1.1rem !important;
    }
    .page-footer {
        background-color: var(--custom-orange-color);
        color: #000;
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
`;
export const Page = forwardRef((props, ref) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [paginationCurrentPage, setPaginationCurrentPage] = useState(1);

    const cancelToken = axios.CancelToken.source();
    const get = async (cp) => {
        const api = `http://localhost:3500/content`;

        console.log(api);

        try {
            const data = await axios.get(api, {
                cancelToken: cancelToken.token,
            });
            setData(data.data);
            console.log();
        } catch (error) {
            axios.isCancel(error) && console.log("error: ", error);
        }
    };

    // useEffect(() => {
    // 	get(1)
    // }, [])

    useEffect(() => {
        get(paginationCurrentPage);
        //console.log(paginationCurrentPage)
        return () => {
            cancelToken.cancel();
        };
    }, [paginationCurrentPage]);

    return (
        <div
            className={`page softPage ${props.data.pageNumber}`}
            ref={ref}
            data-density={props.data.density | "soft"}
        >
            <PageWrapper imag={props?.data?.imag} pageNumber={props.data.pageNumber}>
                <div className="pageInner">
                    <h2
                        className={`heading ${
                            props.data.name.length < 40
                                ? ""
                                : props?.data?.name.length >= 41 || props?.data?.name.length <= 80
                                ? "word1"
                                : "word2"
                        }`}
                    >
                        {props.data.name}
                    </h2>
                    <Records
                        data={data}
                        paginationCurrentPage={paginationCurrentPage}
                        setPaginationCurrentPage={setPaginationCurrentPage}
                    />
                </div>
                <div className="page-footer">{props?.data?.pageNumber}</div>
            </PageWrapper>
        </div>
    );
});
