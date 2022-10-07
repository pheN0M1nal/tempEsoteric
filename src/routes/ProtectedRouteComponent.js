import React, { useContext, useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router";
// import { GlobalUserProfileContext } from "../App";
import { Spinner } from "../components/Global/Spinner";

export const ProtectedRouteComponent = ({
    conditions,
    elementToRenderOnPass,
    ComponentToRenderOnPass,
}) => {
    const [status, setStatus] = useState(null);
    const redirectPath = useRef("");
    const renderedOnce = useRef(false);
    const params = useParams();
    // const userProfileContextData = useContext(GlobalUserProfileContext);
    useEffect(() => {
        const evaluateCondition = async () => {
            let tempStatus = true;
            for (let key of Object.keys(conditions)) {
                const condition = conditions[key];
                if (typeof condition === "function") {
                    if (!(await condition())) {
                        redirectPath.current = key;
                        tempStatus = false;
                        break;
                    }
                } else if (typeof condition === "boolean") {
                    if (!condition) {
                        redirectPath.current = key;
                        tempStatus = false;
                        break;
                    }
                }
            }
            setStatus(tempStatus);
        };
        if (!renderedOnce.current) {
            renderedOnce.current = true;
            evaluateCondition();
        }
    });

    useEffect(() => {
        if (typeof status === "boolean") {
            renderedOnce.current = false;
        }
    }, [status]);
    return typeof status === "boolean" ? (
        status ? (
            ComponentToRenderOnPass ? (
                <ComponentToRenderOnPass {...params} />
            ) : (
                elementToRenderOnPass
            )
        ) : (
            <Navigate to={redirectPath.current} replace={true} />
        )
    ) : (
        <Spinner size={2.0} />
    );
};
