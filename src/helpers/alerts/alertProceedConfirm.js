import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {AlertTitle} from "./components/AlertTitle";
import {AlertContent} from "./components/AlertContent";

export const fireProceedConfirmAlert = (
        title,
        content
    ) => {
        const MySwal = withReactContent(Swal);
        const alertContent = <AlertContent>{content}</AlertContent>;
        return MySwal.fire({
            title: <AlertTitle>{title}</AlertTitle>,
            html: alertContent,
            showConfirmButton: true,
            icon: "question",
        });
    }
;
