import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavigationContext } from "../../MainWrapper";
import { GlobalUserProfileContext } from "../../../../App";

const StyledComponentsAdmin = styled.div`
    display: flex;
    flex-direction: column;
    .mainLink {
        padding: 1rem;
        border-radius: 2.5rem;
        text-transform: uppercase;
        :hover {
            background-color: #aab8b6;
            color: #fff;
        }
    }
    .mainLink.active {
        background-color: #aab8b6 !important ;
        color: #fff !important;
    }
    .subNavIndicatorWrapper {
        padding-left: 2rem;
        .subNavWrapper {
            display: flex;
            flex-direction: column;
            a {
                padding: 1rem;
                border-radius: 2.5rem;
                text-transform: uppercase;
                :hover {
                    background-color: #aab8b6;
                    color: #fff;
                }
            }
            a.active {
                background-color: #aab8b6 !important ;
                color: #fff !important;
            }
        }
    }
    a {
        font-family: var(--font-1);
        color: var(--custom-txt-color);
        text-decoration: none;
        transition: all 0.25s ease-in-out;
        font-size: var(--font-14);
        font-weight: 400;
        @media (max-width: 1024px) {
            font-size: var(--font-12);
        }
    }
`;
const StyledComponents = styled.div`
    color: rgba(20, 20, 20, 0.8);
    display: flex;
    align-items: stretch;
    padding: 0.5rem 1.5rem;
    :hover {
        border-right: 5px solid var(--custom-orange);
        background-color: var(--custom-primary-bg);
    }
    :hover a {
        color: var(--custom-white);
    }

    a {
        font-family: var(--font-1);
        color: var(--custom-txt-color);
        text-decoration: none;
        transition: all 0.25s ease-in-out;
        font-size: var(--font-14);
        font-weight: 400;
        @media (max-width: 1024px) {
            font-size: var(--font-12);
        }
    }
`;

export const NavigationLink = ({ config }) => {
    let parentProfile = null;
    const { currentSubNavKey, setCurrentSubNavKey, currentPageAnchorKey, setCurrentPageAnchorKey } =
        useContext(NavigationContext);
    const handleOnClickMainLink = (e) => {
        if (config.hasSubNav) {
            e.preventDefault();
        }
        setCurrentSubNavKey((x) => (x === config.subNavOpenedKey ? null : config.subNavOpenedKey));
    };

    const { profile } = useContext(GlobalUserProfileContext);
    return (
        <>
            {profile?.account_type === "Admin" ? (
                <StyledComponentsAdmin>
                    {config.hasSubNav ? (
                        <Link
                            className={`mainLink ${
                                currentPageAnchorKey === config.key ? "active" : ""
                            }`}
                            to={config.location}
                            onMouseEnter={handleOnClickMainLink}
                            onClick={() => setCurrentPageAnchorKey(config.key)}
                        >
                            {config.label}
                        </Link>
                    ) : (
                        <Link
                            className={`mainLink ${
                                currentPageAnchorKey === config.key && "active"
                            }`}
                            to={config.location}
                            onClick={() => {
                                setCurrentPageAnchorKey(config.key);
                            }}
                        >
                            {config.label}
                        </Link>
                    )}

                    {config.hasSubNav
                        ? currentSubNavKey === config.subNavOpenedKey && (
                              <div className="subNavIndicatorWrapper">
                                  <div className="subNavWrapper">
                                      {config.subNavMeta.map((key) => {
                                          if (
                                              key.key === "subscription" &&
                                              parentProfile?.meta?.account_type !== "ADMINISTRATOR"
                                          ) {
                                              return null;
                                          }
                                          return (
                                              <Link
                                                  key={key}
                                                  to={key.subNavMetaLocation}
                                                  className={`${
                                                      currentPageAnchorKey === key.key
                                                          ? "active"
                                                          : ""
                                                  }`}
                                                  onClick={() => {
                                                      setCurrentPageAnchorKey(key.key);
                                                  }}
                                              >
                                                  {key.subNavMetaLabel}
                                              </Link>
                                          );
                                      })}
                                  </div>
                              </div>
                          )
                        : null}
                </StyledComponentsAdmin>
            ) : (
                <StyledComponents>
                    <Link
                        to={config.location}
                        onMouseEnter={(e) => {
                            if (config.hasSubNav) {
                                e.preventDefault();
                            }
                            setCurrentSubNavKey((x) =>
                                x === config.subNavOpenedKey ? null : config.subNavOpenedKey
                            );
                        }}
                    >
                        {config.label}
                    </Link>
                </StyledComponents>
            )}
        </>
    );
};
