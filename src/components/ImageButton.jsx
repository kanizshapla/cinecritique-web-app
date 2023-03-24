import React, { useState } from "react";

function ImageButton(props) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
    // Add any other logic you want to execute when the button is clicked
  };

  return (
    <div>
      <img src={props.imageSrc} alt={props.imageAlt} className={props.imageClassName}></img>
      <button className={props.buttonClassName} onClick={handleButtonClick} style={{ backgroundColor: buttonClicked ? "#1aa3ac" : "inherit" }} disabled={buttonClicked}>
        {props.buttonText}
      </button>
    </div>
  );
}

export default ImageButton;
