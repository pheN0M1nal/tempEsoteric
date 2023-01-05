import styled from "styled-components";

const Wrapper = styled.button`
    margin-top: ${({ marginTop }) => marginTop}rem;
    background-color: var(--custom-${({ BgColor }) => BgColor || "orange-color"});
    text-align: center;
    font-size: ${({ fontSize }) => fontSize}px;
    padding: ${({ paddingTopBottom }) => paddingTopBottom || 0.2}rem
        ${({ paddingLeftRight }) => paddingLeftRight || 1}rem;
    border-radius: 2.4rem;
    text-transform: ${(props) => (props.textTransform ? `${props.textTransform}` : "lowercase")};
    outline: none;
    border: 1px solid var(--custom-${({ border }) => border || "btn-bg"});
    width: 100%;
    font-weight: 500;
    min-width: ${(props) => (props.minWidth ? `${props.minWidth}rem` : "initial")};
    max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "fit-content")};
    height: ${(props) => (props.height ? `${props.height}px` : `34px`)};
    transition: all 0.25s ease-out;
    color: var(--custom-${({ inverted }) => (inverted ? "white" : "black")});
    visibility: ${(props) => (props.disabled === true ? `hidden` : `visible`)};
    a {
        color: white;
        display: inline-block;
        width: 100%;
    }

    :hover {
        box-shadow: ${({ addEffect }) => (addEffect ? "var(--custom-shadow)" : "null")};
    }
`;
export const Button = ({
    marginTop = 0,
    fontSize = 1,
    addEffect = false,
    paddingTopBottom,
    paddingLeftRight,
    textTransform,
    disabled,
    minWidth,
    maxWidth,
    height,
    BgColor,
    border,
    children,
    onClick,
    inverted = false,
}) => (
    <Wrapper
        inverted={inverted}
        paddingTopBottom={paddingTopBottom}
        paddingLeftRight={paddingLeftRight}
        marginTop={marginTop}
        fontSize={fontSize}
        BgColor={BgColor}
        border={border}
        disabled={disabled}
        textTransform={textTransform}
        onClick={onClick}
        minWidth={minWidth}
        height={height}
        maxWidth={maxWidth}
        addEffect={addEffect}
    >
        <>{children}</>
    </Wrapper>
);
