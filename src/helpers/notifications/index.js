import { toast } from "react-toastify";

export const notifyToast = ({ content, type, duration }) => {
    let toast_;
    switch (type) {
        case "success":
            toast_ = toast.success;
            break;
        case "error":
            toast_ = toast.error;
            break;
        case "info":
            toast_ = toast.info;
            break;
        default:
            toast_ = toast;
            break;
    }
    toast_(content, {
        position: "top-right",
        autoClose: duration || 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
            minWidth: "400px",
            paddingLeft: ".5rem",
            paddingRight: ".5rem",
        },
    });
};
