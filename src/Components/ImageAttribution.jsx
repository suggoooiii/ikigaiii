import React from "react";

import imgsrc from "../images/luca-bravo-9l_326FISzk-unsplash.jpg";

/* add the image source and alt text */
const imageAltText = "Apple MacBook beside computer mouse on table";

const ImageAttribution = () => {
  return (
    <div>
      <img
        src={imgsrc}
        alt={imageAltText}
        style={{
          height: "90%",
          width: "100%",
          objectFit: "cover",
          animation: "1s ease-out 0s 1 slideInLeft",
        }}
      />
      <p style={{ textAlign: "center" }}>
        x Photo by{" "}
        <a
          href="https://unsplash.com/@lucabravo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          target="_blank"
          rel="noopener noreferrer"
        >
          Luca Bravo
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/photos/apple-macbook-beside-computer-mouse-on-table-9l_326FISzk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
      </p>
    </div>
  );
};

export default ImageAttribution;
