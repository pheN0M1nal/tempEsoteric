import { Route, Routes } from "react-router-dom";
import { ProtectedRouteComponent } from "../ProtectedRouteComponent";
import { isAuthenticated, isGuest } from "../../conditions/Index";
import { MyBook } from "../../components/homePage/homeBoarding";
import LogoutContainer from "../../components/Authentication/logout/Container";
import LoginContainer from "../../components/Authentication/login/Container";

export const GlobalRoutes = () => {
    return (
        <Routes>
            <Route path="/" exact={true} element={<MyBook />} />
            <Route
                path="/login"
                exact={true}
                element={
                    <ProtectedRouteComponent
                        conditions={{ "/": isGuest }}
                        elementToRenderOnPass={<LoginContainer />}
                        profileRequired={false}
                    />
                }
            />
            <Route
                path="/logout"
                exact={true}
                element={
                    <ProtectedRouteComponent
                        conditions={{ "/login": isAuthenticated }}
                        elementToRenderOnPass={<LogoutContainer />}
                    />
                }
            />
        </Routes>
    );
};