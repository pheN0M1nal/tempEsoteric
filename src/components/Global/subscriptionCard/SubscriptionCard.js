import React from "react";

export const SubscriptionCard = ({ title, price, timeSpan, description, handleSubscrition }) => {
    return (
        <>
            <div className="card_title">{title}</div>
            <div className="card_price">{price}</div>
            <div className="card_timeSpan">{timeSpan}</div>
            <div className="card_description">{description}</div>
            <button onClick={handleSubscrition}>Subcribe</button>
        </>
    );
};
