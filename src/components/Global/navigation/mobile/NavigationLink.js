import styled from "styled-components";
import { Link } from "react-router-dom";
import { SizedBox } from "../../SizedBox";
// import { HorizontalRule } from "../../HorizontalRule";
import { useContext } from "react";
import { NavigationContext } from "../../MainWrapper";
// import down from "../../../../static/images/dropdownMenu/down.png";

const StyledComponents = styled.div`
  padding: 0 1.5rem;
  color: rgba(20, 20, 20, 0.8);
  display: flex;
  align-items: stretch;

  :hover a,
  :hover .subNavIndicatorWrapper i {
    color: var(--custom-orange);
  }

  a {
    text-decoration: none;
    color: initial;
    transition: all 0.25s ease-out;
    font-family: var(--font-1);
    font-size: 0.8rem;

    :hover {
      color: var(--custom-orange);
    }
  }

  .subNavIndicatorWrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;

    img {
      margin-top: 0rem;
      width: 15px;
      height: 10px;
      object-fit: cover;
      transition: all 0.25s ease-in-out;

      :hover {
        color: var(--custom-orange);
      }
    }

    .subNavWrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      position: ${({ resolutionMode }) =>
        resolutionMode === "mobile" ? "static" : "absolute"};
      left: -70px;
      z-index: 20;
      right: 0;
      top: 45px;
      background: var(--custom-white);
      border-bottom-right-radius: 2px;
      border-bottom-left-radius: 2px;
      padding: 1rem 1.5rem;
      min-width: 15rem;
      animation-duration: 200ms;
      animation-name: showPopNav;
      animation-timing-function: ease-in;
      box-shadow: ${({ resolutionMode }) =>
        resolutionMode === "mobile" ? "none" : "0 0px 6px rgb(0 0 0 / 0.1)"};

      @keyframes showPopNav {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      .link {
        text-decoration: none;
        color: initial;
        transition: all 0.25s ease-out;
        font-family: var(--font-1);
        font-size: 0.8rem;

        :hover {
          color: var(--custom-orange);
        }
      }
      .subNavSubNavWrapper {
        margin-left: 1rem;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        display: none;
        @media (max-width: 875px) {
          display: block;
        }
        .link {
          display: block;
          margin-top: 0.5rem;
        }
      }
    }
  }
`;

export const NavigationLink = ({ config, resolutionMode }) => {
  const { currentSubNavKey, setCurrentSubNavKey } =
    useContext(NavigationContext);
  return (
    <StyledComponents resolutionMode={resolutionMode}>
      <Link
        to={config.location}
        onClick={(e) => {
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
      <SizedBox width={0.5} />
      <div className="subNavIndicatorWrapper">
        {config.hasSubNav ? (
          <>
            <img src="" alt="dropdown down" />
            {currentSubNavKey === config.subNavOpenedKey ? (
              <div className="subNavWrapper">
                {Object.keys(config.subNavMeta).map((key) => (
                  <>
                    <Link
                      key={key}
                      className="link"
                      to={config.subNavMeta[key]}
                    >
                      {key}
                      {config.subNavSubNavMeta && config.subNavSubNavMeta[key] && (
                        <div className={"subNavSubNavWrapper"}>
                          {(config.subNavSubNavMeta[key] || []).map((item) => (
                            <Link
                              key={item.label}
                              className="link"
                              to={item.route}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </Link>
                    {/* <HorizontalRule /> */}
                  </>
                ))}
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </StyledComponents>
  );
};
