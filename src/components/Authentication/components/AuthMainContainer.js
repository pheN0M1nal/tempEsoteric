import styled from "styled-components";
import { AuthenticationImage } from "./AuthImage";
import { AuthenticationHeader } from "./Header";

const FormWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    animation: shake 1s;
    @media (max-width: 1100px) {
        flex-direction: column-reverse;
    }
    .AuthContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        width:100%;
        padding-left: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        @media (max-width: 1100px) {
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }
    .formfooter {
        display: flex;
        .formfooterinner {
            flex-direction: column;
            display: flex;
            width: 100%;
            border-right: 1px solid var(--custom-border-color);
            margin-right: 2rem;
        }
        
    }
`;

export const AuthMainContainer = ({ mode,modeimg, children }) => {
    return (
        
            <FormWrapper>
                <div className="AuthContent">
                    <AuthenticationHeader mode={mode} />
                    {children}
                </div>
               <AuthenticationImage modeimg={modeimg} mode={mode}/>
            </FormWrapper>
        
    );
};
