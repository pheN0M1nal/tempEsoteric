import styled from "styled-components";

const FormElement = styled.form`
    width: 100%;
    margin-top: 2rem;

    label {
        font-size: var(--font-14);
        letter-spacing: 0.5px;
        display: block;
        color: var(--custom-txt-color);
        text-align: left;
        cursor: pointer;
    }
    p {
        color: var(--custom-txt-color);
    }
    strong {
        cursor: pointer;
        color: var(--custom-orange-color);
        letter-spacing: 1px;
    }
`;

export const FormComponent = ({ children }) => <FormElement>{children}</FormElement>;
