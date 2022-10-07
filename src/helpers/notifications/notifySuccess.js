import {notifyToast} from "./index";


export const notifySuccess = (content, duration) => {
    notifyToast({
        content: content || "Success",
        type: "success",
        duration
    })
}