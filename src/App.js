import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GlobalRoutes } from "./routes/GlobalRoutes";
import { fetchUserProfile } from "./store/actions/userActions";

const App = () => {
    const dispatch = useDispatch();
    const AUth = window.localStorage.getItem("access_token");

    useEffect(() => {
        AUth && dispatch(fetchUserProfile());
    }, [AUth]);
    return (
        <BrowserRouter>
            <GlobalRoutes />
        </BrowserRouter>
    );
};

export default App;
