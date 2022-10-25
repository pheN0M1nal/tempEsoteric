import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideSubscriptionModal } from "../../store/actions/modalActions";
import { ModalComponent } from "../Global/Modal";
import { CloseBtn } from "../Global/CloseBtn";
import SubscriptionCards from "../subscriptions/SubscriptionCards";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 80vh;
    @media (max-width: 700px) {
        width: 100%;
    }
`;

const SubscriptionModal = () => {
    const dispatch = useDispatch();

    const modalInfo = useSelector((state) => state.subscriptionModal);
    const { show } = modalInfo;

    const userInfo = useSelector((state) => state.userProfile);
    const { profile } = userInfo;

    function closeModal() {
        dispatch(hideSubscriptionModal());
    }

    return (
        <ModalComponent
            isOpen={show}
            onRequestClose={closeModal}
            modalLabel={"Example Modal"}
            classNameFromProps="subscriptionModels"
        >
            <Wrapper>
                <SubscriptionCards />
                <CloseBtn handleOnClickClose={closeModal} />
            </Wrapper>
        </ModalComponent>
    );
};

export default SubscriptionModal;
