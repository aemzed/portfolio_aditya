import React from "react";
import Typewriter from "typewriter-effect";

function Type({ language = "id" }) {
  const strings =
    language === "id"
      ? ["Insinyur Perangkat Lunak", "Freelancer"]
      : ["Software Engineer", "Freelancer"];

  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
