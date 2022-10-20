import { fireProceedConfirmAlert } from "./alertProceedConfirm";

export const fireDeleteConfirmAlert = ({
    title = title||"Confirm Delete",
    content = content || "This process is irreversible, proceed anyway?"}
) => {
    return fireProceedConfirmAlert(title, content);
};
