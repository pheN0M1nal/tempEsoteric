// import dummyImage from "../../../../static/images/dropdownMenu/icons.svg";
import { Button } from "../../components/Global/Button";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;

    .imageWrapper {
        width: 2.5rem;
        height: 2.5rem;

        margin-bottom: 15px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    .controlsWrapperImage {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;

        .text {
            color: var(--custom-white);
            font-weight: 600;
            font-size: 0.9rem;
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
`;

export const ImagePickerComponent = ({ image, setFiles, field_name, label, purpose }) => {
    const [tempImage, setTempImage] = useState(null);
    const [tempImageData, setTempImageData] = useState(null);

    useEffect(() => {
        if (tempImage) {
            const fileReader = new FileReader();
            fileReader.addEventListener(
                "load",
                () => {
                    setTempImageData(fileReader.result);
                },
                false
            );
            fileReader.readAsDataURL(tempImage);
            setFiles((files) => {
                const temp = { ...files };
                temp[field_name] = {
                    ...(temp[field_name] || {}),
                    to_be_uploaded_buffer: tempImage,
                    purpose,
                };
                return temp;
            });
        }
    }, [tempImage]);

    return (
        <StyledComponent>
            <div className="imageWrapper">
                <img src={tempImageData || image} alt={""} />
            </div>
            <div className="controlsWrapperImage">
                <span className="text">{tempImage?.name || "Select profile image"}</span>

                <div className="chooseImageButtonWrapper">
                    <Button fontSize={1} paddingTopBottom={0.4} paddingLeftRight={1.5}>
                        UPLOAD {label}
                    </Button>
                    <input
                        type="file"
                        onChange={(e) => {
                            setTempImage(e.target.files[0]);
                        }}
                    />
                </div>
            </div>
        </StyledComponent>
    );
};
