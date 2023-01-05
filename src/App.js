import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GlobalRoutes } from "./routes/GlobalRoutes";
import { showLoginModal } from "./store/actions/modalActions";
import { fetchUserProfile } from "./store/actions/userActions";

const App = () => {
    const dispatch = useDispatch();
    const Auth = window.localStorage.getItem("access_token");

    useEffect(() => {
        Auth && dispatch(fetchUserProfile());
        !Auth && dispatch(showLoginModal());;
    }, [Auth]);
    return (
        <BrowserRouter>
            <GlobalRoutes />
        </BrowserRouter>
    );
};

export default App;
