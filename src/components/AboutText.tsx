import React, { useEffect, useState, useRef } from "react";
import ImproveText from "./ImproveText";
interface props {
  handleClick: Function;
}
function AboutText({ handleClick }: props) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAppeared) {
            setIsVisible(true);
            setHasAppeared(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAppeared]);

  return (
    <div>
      <div ref={sectionRef} className="py-12 bg-background">
        <div
          className={`text-2xl font-bold text-center `}
          // ${
          //   isVisible
          //     ? "opacity-100 translate-y-0"
          //     : "opacity-0 translate-y-[1rem]"
          // } transition-all duration-1000 ease-in-out
        >
          <div
            className={` bg-primary-light items-center justify-center align-middle max-w-[85%] mx-auto rounded-3xl mt-12 py-4`}
          >
            <p className={`text-5xl font-bold text-center py-3 text-text `}>
              {"Statistics on how much labs spend on computer training"}
            </p>
            <hr className=" bg-gray-200 border-0 dark:bg-gray-700 max-w-[90%] mx-auto h-[2px] rounded-md my-4"></hr>
            <div className="flex justify-center pb-6 pt-2 ">
              <img
                className={` ${
                  isVisible ? "opacity-100 " : "opacity-0"
                } object-scale-down w-2/3 
      transition-all duration-1000 ease-in-out`}
                src={`../static/stat.png`}
                onClick={() => {
                  handleClick("stat.png");
                }}
              />
            </div>
            <div
              ref={sectionRef}
              className="py-16 bg-primary mt-20 mb-8 max-w-[95%] mx-auto rounded-3xl"
            >
              <p
                className={`text-6xl font-bold text-center ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[1rem]"
                } transition-all duration-1000 ease-in-out`}
              >
                We founded NCI to solve this problem.
              </p>
            </div>
            <ImproveText
              text="We improve computer usability with Artificial Intelligence and neural networks"
              name="verify.png"
              bgColor="bg-secondary"
              alt="Neural Computer Interfaces"
              handleClick={handleClick}
            ></ImproveText>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutText;
