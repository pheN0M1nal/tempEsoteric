import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { AllPages } from "../BlogBookModel/ShowAllPages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { hidePdfModal } from "../../store/actions/modalActions";
import { ModalComponent } from "../Global/Modal";

const customStyles = {
    content: {
        top: "10%",
        left: "10%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, 0%)",
    },
};

const PdfModal = () => {
    const dispatch = useDispatch();

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    const modalInfo = useSelector((state) => state.pdfModal);
    const { show, pdf } = modalInfo;

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00'
    }

    function closeModal() {
        dispatch(hidePdfModal());
    }

    useEffect(() => {
        console.log("pdfModal");
        return () => {
            console.log("pdfModal um");
        };
    });

    return (
        <Modal
            // style={customStyles}
            isOpen={show}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            <div className="all-page-container">
                <AllPages
                    pdf={pdf}
                    callbackCancel={() => {
                        closeModal();
                    }}
                />
            </div>
        </Modal>
    );
};

export default PdfModal;
