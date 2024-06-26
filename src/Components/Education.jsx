import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "0.5rem",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>University of Washington</h3>
          <p>Bachelor of Science in Computer Science</p>
          <p>Seattle, WA</p>
          <p>2018 - 2022</p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "0.5rem",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>University of Washington</h3>
          <p>Bachelor of Science in Computer Science</p>
          <p>Seattle, WA</p>
          <p>2018 - 2022</p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "0.5rem",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>University of Washington</h3>
          <p>Bachelor of Science in Computer Science</p>
          <p>Seattle, WA</p>
          <p>2018 - 2022</p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "0.5rem",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>University of Washington</h3>
          <p>Bachelor of Science in Computer Science</p>
          <p>Seattle, WA</p>
          <p>2018 - 2022</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
