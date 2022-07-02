import React from "react";

export default function Card(props) {
    const data = props.data;
    let badgeValue;
    if (data.openSlots === 0) {
        badgeValue = "SOLD OUT";
    } else if (data.location === "Online") {
        badgeValue = "ONLINE";
    }
    return (
        <div className="card">
            {badgeValue && <div className="card-badge">{badgeValue}</div>}
            <img src={`./images/${data.image}`} alt={data.title} className="card-img" />
            <div className="card-stats">
                <img src="./images/rating-star.png" alt="rating-star" className="card-star" />
                <span>{data.rating}</span>
                <span className="gray">({data.reviewCount}) .</span>
                <span className="gray">{data.location}</span>
            </div>
            <p>{data.title}</p>
            <p><span className="black">From ${data.costperperson}</span> / person</p>
        </div>
    );
}