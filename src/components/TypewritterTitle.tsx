import React, { useEffect, useState, useRef } from "react";
interface Props {
  seen: boolean;
  setSeen: Function;
}
let timer: NodeJS.Timer | undefined;
const title = "Axon Terminal";

function TypewritterTitle({ seen, setSeen }: Props) {
  const [text, setText] = useState("");
  const titleRef = useRef(null);
  const typewrite = () => {
    let i = -1;
    timer = setInterval(() => {
      i++;
      if (i === title.length - 1) clearInterval(timer);
      setText((prev) => prev + title[i]);
    }, 80);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If the TypewritterTitle is in the viewport, trigger the fade-in effect
            console.log("Made it");
            if (!seen) {
              setSeen(true);
              console.log(seen);
              typewrite();
            }
          }
        });
      },
      { threshold: 0.99 } // Adjust the threshold as needed
    );

    // Start observing the TypewritterTitle component
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, [seen]);

  return (
    <div ref={titleRef} className="bg-cat-night-header py-40 relative">
      <div className="absolute bottom-0 left-0 w-full py-4 h-2/3 bg-gradient-to-b from-transparent to-cat-night-background "></div>
      <p className={`xl:text-8xl text-7xl font-mono text-center text-white`}>
        <span
          className={` px-2 ${
            text.length === title.length
              ? "textShadow-blinkingBorder animate-blinkingBorder"
              : "border-r-[6px]"
          }`}
        >
          {text}
        </span>
      </p>
    </div>
  );
}

export default TypewritterTitle;
