import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalComponent } from "../Global/Modal";
import { hideProfileModal } from "../../store/actions/modalActions";
import { CloseBtn } from "../Global/CloseBtn";
import styled from "styled-components";
import { EditProfile } from "../userprofile/ProfileForm";
import { RenewPassword } from "../userprofile/RenewPassword";
import { ProfileSubscription } from "../userprofile/ProfileSubscription";

const Wrapper = styled.div`
    width: 80%;
    height: 80vh;
    @media (max-width: 700px) {
        width: 100%;
    }
    .grid-container {
        display: grid;
        grid-template-columns: auto auto;
        gap: 1.5rem;
        background-color: transparent;
        padding: 10px;
        @media (max-width: 1100px) {
            grid-template-columns: auto;
        }
    }

    .grid-container > div {
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.9);
        text-align: center;
        padding: 20px;
        font-size: 30px;
    }

    .Update_profile_outer {
        grid-row: 1 / 3;
    }
    /* .Update_profile_outer,
    .View_Subscription,
    .Update_Password {
        position: relative;
        overflow: hidden;
        z-index: 0;
        &::before {
            content: "";
            position: absolute;
            background-color: #4f9595;
            width: 100%;
            height: 100%;
            z-index: -1;
            top: -50%;
            left: -140%;
            transform: rotate(130deg);
        }
    } */
`;

const ProfileModal = () => {
    const dispatch = useDispatch();

    const modalInfo = useSelector((state) => state.profileModal);
    const { show } = modalInfo;

    const userInfo = useSelector((state) => state.userProfile);
    const { profile } = userInfo;

    function closeModal() {
        dispatch(hideProfileModal());
    }

    return (
        <ModalComponent
            isOpen={show}
            onRequestClose={closeModal}
            modalLabel={"Example Modal"}
            classNameFromProps="ProfileModal"
        >
            <Wrapper>
                <div className="grid-container">
                    <div className="Update_profile_outer ">
                        <EditProfile />
                    </div>
                    <div className="View_Subscription ">
                        <ProfileSubscription />
                    </div>
                    <div className="Update_Password ">
                        <RenewPassword />
                    </div>
                </div>

                <CloseBtn handleOnClickClose={closeModal} />
            </Wrapper>
        </ModalComponent>
    );
};

export default ProfileModal;
