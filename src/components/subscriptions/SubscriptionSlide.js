import React from "react";
import { Button } from "../Global/Button";

export const SubscriptionSlide = ({ title,price,handleSubscrition ,year,id}) => {
  return (
    <div
      className="p-4  planCard slick-slide"
      tabIndex="-1"
      data-slick-index="3"
      aria-hidden="true"
      key={id}
    >
      <div className="CardHeading">{title}</div>
      <div className="CardPrice">
        <span className="mainPrice">
          {price}/<small>{year}</small>
        </span>
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
