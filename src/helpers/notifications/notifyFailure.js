import { notifyToast } from "./index";

export const notifyFailure = (content, duration) => {
    notifyToast({
        content: content || "Failed",
        type: "error",
        duration,
    });
};
