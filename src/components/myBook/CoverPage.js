import { forwardRef } from "react";
import styled from "styled-components";
const CoverWrapper = styled.div`
    background-color: #ff0000;
    background-image: ${`url(${(props) => props?.bgimg || ""} )`};
`;
export const PageCover = forwardRef((props, ref) => {
    return (
        <CoverWrapper bgImg={props}>
            <div
                className={"page page-cover page-cover-" + props.pos}
                ref={ref}
                data-density="hard"
            >
                <div className="page-content">
                    <h2>{props.children}</h2>
                </div>
            </div>
        </CoverWrapper>
    );
});
