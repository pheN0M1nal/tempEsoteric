import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styled from "styled-components";

import { SubscriptionSlide } from "./SubscriptionSlide";
import { subscriptionModels } from "../../DataList/subscriptionModels";

const StyledComponent = styled.div`
text-align: center;
    .CardGroupPlan {
        box-shadow: inset 0 0px 30px 10px var(--cardshadowlight) !important;
        padding-bottom: 3rem !important;
        padding: 3rem;
        @media (max-width: 500px) {
            padding: 0rem;
        }
    }
    .Header {
        margin: 0 auto;
        margin-bottom: 1rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        background-color: var(--custom-light-bg);
        display: inline;
        padding: 0.5rem 1rem;
        border-radius:2.4rem;
        width: 100%;
        
    }
    .slick-slider {
        background-color: var(--custom-light-bg);
        padding: 3rem;
        border-radius: 20px;
    }
    .slick-slide ul li {
        margin-bottom: 1.5rem;
    }
    .slick-slide img {
        display: inline;
        margin-right: 1rem;
        width: 6px;
    }
    .slick-slide > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slick-list {
        padding-bottom: 4rem !important;
    }
    .planCard {
        color: var(--white) !important;
        box-shadow: inset 0 0 25px 3px var(--cardshadow);
        border-radius: 10px;
        border: 1px solid var(--custom-border-color);
        position: relative;
        width: 100%;
        max-width: 250px;
    }
    .planCardDetailListOuter {
        display: flex;
        justify-content: center;
    }
    .planCardDetailList {
        text-transform: capitalize;
        text-decoration: none;
        list-style: none;
        margin-bottom: 2rem;
        padding-left: 0rem;
    }
    .planCardDetailList svg {
        margin-right: 0.5rem;
        fill: var(--yelowcolor);
    }
    .PlanBtn {
        position: absolute;
        bottom: -25px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
    }
    .CardHeading {
        margin: auto;
        color: var(--white) !important;
        margin: 1rem;
        letter-spacing: 0.5px;
        font-size: 18px;
        font-weight: 700;
        text-align: center;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    }
    .CardPrice {
        color: var(--white) !important;
        margin: auto;

        height: 104px;

        outline: 2.5px solid var(--custom-secondry-bg);
        border: 2px solid var(--custom-secondry-bg);
        box-shadow: 0 0 25px 3px var(--custom-primary-bg);
        margin-bottom: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .currencyPlan {
        font-size: 18px;
        color: var(--color);
    }
    .mainPrice {
        line-height: normal;
        font-size: 32px;
        color: var(--yelowcolor);
    }
    .monthPlan {
        color: var(--color);
        font-size: 16px;
    }
    .slick-prev:before,
    .slick-next:before {
        font-size: 45px;
        color:var(--custom-orange-color);
    }
    .slick-prev {
        left: 10px;
    }
    .slick-next {
        right: 35px;
    }
`;

const SubscriptionCards = () => {
    let settings = {
        dots: true,
        infinite: false,
        // autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        initialSlide: 0,
        swipeToSlide: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const handleSubscrition = () => {
        console.log("handle subscription");
    };
    return (
        <>
            <StyledComponent>
                <h2 className="Header">SUBSCRIPTION</h2>
                <div className=" logincardgroup CardGroupPlan">
                    <Slider {...settings} className="umar">
                        {subscriptionModels.map((model) => (
                            <SubscriptionSlide
                                title={model.title}
                                price={model.price}
                                timeSpan={model.timeSpan}
                                description={model.description}
                                handleSubscrition={handleSubscrition}
                            />
                        ))}
                    </Slider>
                </div>
            </StyledComponent>
        </>
    );
};

export default SubscriptionCards;
