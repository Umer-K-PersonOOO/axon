import React from "react";
import RightText from "./RightText";
import LeftText from "./LeftText";
import AboutText from "./AboutText";
import Title from "./Title";
import AxonProduct from "./AxonProduct";
import Footer from "./Footer";
import { useState } from "react";
import ImagePopup from "./ImagePopup";

const AboutPage: React.FC = () => {
  const [imgUrl, setUrl] = useState<string>("");
  return (
    <div className="bg-background">
      <RightText
        text="Despite all our advances in computing, computers are still fundamentally unintuitive"
        name="Diagram_be_hard.png"
        bgColor="bg-undertone"
        alt="Demonstration"
        handleClick={setUrl}
      ></RightText>
      <LeftText
        text="This probelm is exaserbated in the computational sciences fields"
        name="Shell_hard.png"
        alt="Current software"
        bgColor="bg-undertone"
        textColor="text-text"
        handleClick={setUrl}
      />
      <AboutText handleClick={setUrl} />
      <Title />
      <AxonProduct />
      {/* Product RoadMap component */}
      {/* Make it a socials footer */}
      <Footer />
      <ImagePopup img={imgUrl} turnOff={setUrl} />
    </div>
  );
};

export default AboutPage;
