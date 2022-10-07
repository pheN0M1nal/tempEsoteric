import {getAPISuccessMessage} from "../api/readAPIMessage";
import {notifyToast} from "./index";

export const notifyApiSuccessMessage = (responseData, renderDirectly, duration) => {
    let alertContent;
    if (typeof renderDirectly === "boolean" && renderDirectly) {
        alertContent = responseData
    } else {
        alertContent = getAPISuccessMessage(responseData)
    }
    notifyToast({
        content: alertContent,
        type: "success",
        duration
    })
}