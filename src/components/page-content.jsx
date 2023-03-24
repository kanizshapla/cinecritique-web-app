import React from "react";
import ImageButton from "./ImageButton";
import CardSection from "./ImageWithButtons";

function PageContent(){
    return(
      // <div className="home-images">
      //   <div className="image">
      //     <ImageButton
      //       imageSrc="./images/submit-review.jpg"
      //       imageAlt="submit review"
      //       imageClassName="images"
      //       buttonText="Submit Review"
      //       buttonClassName="btn"
      //     />
      //     <ImageButton
      //       imageSrc="./images/toprated-movie.jpg"
      //       imageAlt="top rated movie"
      //       imageClassName="images"
      //       buttonText="Top Rated Movie"
      //       buttonClassName="btn"
      //     />
      //     <ImageButton
      //       imageSrc="./images/user-review.jpg"
      //       imageAlt="user review"
      //       imageClassName="images"
      //       buttonText="User Reviews"
      //       buttonClassName="btn"
      //     />
      //   </div>
      // </div>
      <CardSection />
    );
}

export default PageContent;
