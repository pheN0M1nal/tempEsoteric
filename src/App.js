import { createContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "./store/actions";
import { GlobalRoutes } from "./routes/globalRoutes/GlobalRoutes";
import { MyBook } from "./components/homePage/homeBoarding";

export const QuizItemsContext = createContext({});
export const IsAdmin = createContext({});
export const GlobalUserProfileContext = createContext({
    isFetchingProfile: null,
    profile: null,
    lastTimeFetched: null,
});

const App = () => {
    const { isFetchingProfile, profile, lastTimeFetched } = useSelector(
        (state) => state.userProfileReducer
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserProfile);
    }, []);
    return (
        <GlobalUserProfileContext.Provider value={{ isFetchingProfile, profile }}>
            <BrowserRouter>
                <GlobalRoutes />
            </BrowserRouter>
        </GlobalUserProfileContext.Provider>
    );
};

export default App;
