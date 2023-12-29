import React, { useEffect, useState, useRef } from "react";

interface Props {
  text: string;
  name: string;
  alt?: string;
  handleClick: Function;
  bgColor?: string;
  textColor?: string;
}

const defaultProps = {
  alt: "Image",
  bgColor: "bg-amber-50 ",
  textColor: "black",
};

function TerminalLeft(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
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
      { threshold: 0.9 } // Adjust the threshold as needed
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
    <div className="bg-cat-night-background pt-3 pb-4 my-60">
      <div
        className={` ${props.bgColor} items-center justify-center align-middle my-12 w-3/4 mx-auto`}
      >
        <div
          ref={sectionRef}
          className="relative justify-center items-center align-middle pt-2 "
        >
          <img
            className={`object-contain w-full`}
            src={`../static/${props.name}`}
            alt={props.alt}
            onClick={() => {
              props.handleClick(props.name);
            }}
          />
          <div className="absolute bottom-0 left-0 w-full py-4 h-3/5 bg-gradient-stop-20 bg-gradient-to-b from-transparent to-cat-night-background to-90%"></div>
          <span
            className={`absolute bottom-0 left-0 w-full h-1/5 xl:text-4xl font-light text-center text-white ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[-3rem]"
            } transition-all duration-1000 ease-in-out`}
          >
            {props.text}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TerminalLeft;
