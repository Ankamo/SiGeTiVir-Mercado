import React from "react";

const Snowflakes = () => {
  return (
    <>
      {/* Genera múltiples copos de nieve */}
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="snowflake" key={index}>
          ❄️
        </div>
      ))}
    </>
  );
};

export default Snowflakes;
