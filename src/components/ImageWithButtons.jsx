import React from "react";
import images from "../assets/imageSubmit.jpg";
import topratedimage from "../assets/toprated.jpg"
import userreview from "../assets/userreview.jpg"
const CardUtility = [
  {
    img: images,
    cardBar: "1 January 2021. Posted By Author INTERIOR, EXTERIOR, HOME DECOR",
    cardHeader: "Ohh Yeah! cooking eating our happiness for bally",
    cardBody:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    button: "Submit Review"
  },
  {
    img: topratedimage,
    cardBar: "1 January 2021. Posted By Author INTERIOR, EXTERIOR, HOME DECOR",
    cardHeader: "Ohh Yeah! cooking eating our happiness for bally",
    cardBody:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    button: "Top Rated Review"
  },
  {
    img: userreview,
    cardBar: "1 January 2021. Posted By Author INTERIOR, EXTERIOR, HOME DECOR",
    cardHeader: "Ohh Yeah! cooking eating our happiness for bally",
    cardBody:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    button: "User Reviews"
  },
];
export default function CardSection() {
  return (
    <div className="homepage">
      {CardUtility.map((cardUtility, idx) => (
        <div className="cardContainer">
          <img src={cardUtility.img} />
          <div className="cardSidebar">
            <div className="cardBar">{cardUtility.cardBar}</div>
            <div className="cardHeader">{cardUtility.cardHeader}</div>
            <div className="cardBody">{cardUtility.cardBody}</div>
            <button className="cardButton">{cardUtility.button}</button>
          </div>
        </div>
      ))}
    </div>
  );
}
