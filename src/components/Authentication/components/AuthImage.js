import styled from "styled-components";
import login from "../../../static/images/general/wood8.jpg"
import forgetPassword from "../../../static/images/general/wood6.jpg"
import register from "../../../static/images/general/wood5.jpg"

const Wrapper = styled.div`
    
    img{
        width:100%;
        height: 100%;
        object-fit: cover;
        clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%);
        @media (max-width:1100px){
            /* clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 0 100%, 0 50%, 0 0); */
            clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 80% 70%, 65% 65%, 50% 60%, 0% 75%);
            width:100%;
            height: 200px;

        }
    }
`;

const modeHeaderMapping = {
    login: login,
    forgot_password: forgetPassword,
    register: register,
};

export const AuthenticationImage = ({ modeimg }) => {
    return (
        <Wrapper>
            <img src={modeHeaderMapping[modeimg]}/>
        </Wrapper>
    );
};
