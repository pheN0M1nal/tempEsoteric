import React from "react";
import { hideBlogModal } from "../../store/actions/modalActions";
import { useDispatch, useSelector } from "react-redux";
import { ModalComponent } from "../Global/Modal";
import { CloseBtn } from "../Global/CloseBtn";
import { BlogsScreen } from "../../screens/BlogsScreen";

const BlogModal = () => {
    const dispatch = useDispatch();
    const modalInfo = useSelector((state) => state.blogModal);
    const { show } = modalInfo;

    function closeModal() {
        dispatch(hideBlogModal());
    }

    return (
        <ModalComponent
            isOpen={show}
            onRequestClose={closeModal}
            modalLabel={"Blog Modal"}
            classNameFromProps="blog_modal"
        >
            <>
                <BlogsScreen />
                <CloseBtn handleOnClickClose={closeModal} />
            </>
        </ModalComponent>
    );
};

export default BlogModal;
