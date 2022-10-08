import { forwardRef, useEffect } from "react";
import styled from "styled-components";
const PageWrapper = styled.div`
    background-color: #ff0000;
    background-image: ${`url(${(props) => props?.bgimg || ""} )`};
`;
export const Page = forwardRef((props, ref) => {


    return (
        <PageWrapper>
            <div className="page" ref={ref} data-density={props.density | "soft"}>
                <div className="page-content">
                    <h2 className="page-header">Page header - {props.number}</h2>
                    <div
                        className="page-image"
                        style={{ backgroundImage: "url(images/html/" + props.image + ")" }}
                    ></div>
                    <div className="page-text">{props.children}</div>
                    <div className="page-footer">{props.number + 1}</div>
                </div>
            </div>
        </PageWrapper>
    );
});
