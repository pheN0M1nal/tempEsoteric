import React from "react";
import dimond from "../../static/images/Auth/2389848@1.png";
import { Button } from "../Global/Button";

export const SubscriptionSlide = ({ title,price,handleSubscrition }) => {
  return (
    <div
      className="p-4  planCard slick-slide"
      tabIndex="-1"
      data-slick-index="3"
      aria-hidden="true"
    >
      <div className="CardHeading">{title}</div>
      <div className="CardPrice">
        <span className="mainPrice">
          ${price}/<small>mo</small>
        </span>
      </div>
      <div className="planCardDetailListOuter">
        {/* <ul className="planCardDetailList">
          {item.list.map((listItem, i) => {
            return (
              <li key={i}>
                <img src={dimond} alt="" />

                <span>{listItem}</span>
              </li>
            );
          })}
        </ul> */}
      </div>
      <span className="PlanBtn">
        <Button
          textTransform="capitalize"
          fontWeight={700}
          fontSize={16}
          maxWidth={170}
          height={54}
          onClick={handleSubscrition}
        >
          Subscribe
        </Button>
      </span>
    </div>
  );
};
