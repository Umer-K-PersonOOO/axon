import LeftText from "./LeftText";
import RightText from "./RightText";
import Title from "./Title";
import ImagePopup from "./ImagePopup";
import GithubLink from "./GithubLink";
import { useEffect, useState } from "react";
import TypewritterTitle from "./TypewritterTitle";
import TerminalLeft from "./TerminalLeft";
import RightItalized from "./RightItalized";
import PlannedFeatures from "./PlannedFeatures";
import AETitle from "./AETitle";
import AEPlannedFeatures from "./AEPlannedFeatures";
import AEText from "./AEText";
import IntoHand from "./IntoHand";
import Develop from "./Develop";
import Connect from "./Connect";
import AxonTitle from "./AxonTitle";
import VoteText from "./VoteText";
import Footer from "./Footer";
import NaturalLanguage from "./NaturalLanguage";
import APIText from "./APIText";

function HomePage() {
  const [imgUrl, setUrl] = useState<string>("");
  const [tTitleseen, setTTitleSeen] = useState(false);
  const [aETitleseen, setAETitleSeen] = useState(false);
  return (
    <div className="bg-background">
      <Title />
      <LeftText
        text="A personal AI assisstant designed to simplify and accelerate your
          reasearch, data analysis, and programming."
        name="axon_module.png"
        bgColor="bg-cat-wild-sand"
        alt="Microchip Diagram"
        handleClick={setUrl}
      />
      <RightItalized handleClick={setUrl} />
      <div className="bg-cat-night-background" id="terminal">
        <TypewritterTitle seen={tTitleseen} setSeen={setTTitleSeen} />
        <div className="mt-32">
          <LeftText
            text="Validates your commands to catch your mistakes."
            name="verify.png"
            alt="Verifying code"
            bgColor="bg-cat-night-button"
            textColor="text-cat-night-white"
            handleClick={setUrl}
          />
        </div>
        <TerminalLeft
          text="Works with you for reasearch help, tech support, and debugging assistance."
          name="HelpReasearch.png"
          bgColor="bg-cat-night-background"
          alt="Screenshot"
          textColor="text-cat-night-white"
          handleClick={setUrl}
        />

        <NaturalLanguage />
        <GithubLink />
        <PlannedFeatures />
      </div>
      <div className=" bg-background" id="AE">
        <AETitle />
        <AEText />
        <AEPlannedFeatures />
      </div>
      <div className="bg-[#F8FBFD]" id="API">
        <AxonTitle />
        {/* Custom Left Text */}
        <IntoHand />

        {/* Special Right */}
        <Develop />
        <APIText />
        <Connect />
        <VoteText />
      </div>

      <Footer />
      <ImagePopup img={imgUrl} turnOff={setUrl} />
    </div>
  );
}

export default HomePage;
