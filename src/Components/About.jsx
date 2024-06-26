/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As a Real-time Graphics Artist & Creative Technologist, I specialize in pioneering immersive visual experiences and technological innovations. My expertise in real-time graphics, virtual reality, and interactive installations pushes the boundaries of creativity and technology, setting new industry standards and captivating audiences.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */

const skillsList = [
  "Real-time Rendering",
  "Virtual Reality (VR) Development",
  "3D Modeling and Animaton",
  "Shader Programming",
  "Generative Art",
  "Creative Coding (e.g., Processing, OpenFrameworks)",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = "Art challenges technology, and technology inspires the art. – John Lasseter";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          // textDecorationStyle: "double",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="large" style={{ padding: "2rem 2rem 0", fontSize: 20 }}>
          {detailOrQuote}
        </p>
      </div>
    </section>
  );
};

export default About;
