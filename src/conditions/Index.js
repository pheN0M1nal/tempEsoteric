// import moment from "moment";
import axiosServerInstance from "../config/api/axois"

const accessTokenCheckExistence = () => {
    const access_token = window.localStorage.getItem("access_token");
    if (access_token === null) {
        window.localStorage.setItem("refresh_token", null);
        return false;
    }
    return true;
};
// const checkIfUserContextIsValid = (userProfileContext) => {
//     const { profile, lastTimeFetched, isFetchingProfile } = userProfileContext;
//     return (
//         profile &&
//         !isFetchingProfile &&
//         lastTimeFetched &&
//         moment().diff(lastTimeFetched, "minutes", true) < 1
//     );
// };

export const isGuest = async function () {
    const refresh_token = window.localStorage.getItem("refresh_token");
    // const access_token = window.localStorage.getItem("access_token");
    if (accessTokenCheckExistence) {
        return true;
    } else {
        return await axiosServerInstance()
            .post("/auth/refresh_token", {
                refresh: refresh_token,
            })
            .then((response) => {
                const { access } = response.data;
                if (access) {
                    window.localStorage.setItem("access_token", access);
                    return false;
                } else {
                    return true;
                }
            })
            .catch((err) => {
                return true;
            });
    }
};

export const isAuthenticated = async function () {
    const refresh_token = window.localStorage.getItem("refresh_token");
    const access_token = window.localStorage.getItem("access_token");
    if (refresh_token === null || access_token === null) {
        return false;
    } else {
        return await axiosServerInstance()
            .post("/auth/refresh_token", {
                refresh: refresh_token,
            })
            .then((response) => {
                const { access } = response.data;
                if (access) {
                    window.localStorage.setItem("access_token", access);
                    return true;
                } else {
                    return false;
                }
            })
            .catch((err) => {
                return false;
            });
    }
};
