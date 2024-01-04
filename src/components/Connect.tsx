import React, { useEffect, useState, useRef } from "react";

const text =
  "Connecting software developers and companies with global reasearch labs in the Axon Marketplace.".split(
    " "
  );

function RightText() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [firing, setFiring] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentWordIndex((prevIndex) => {
  //       return (prevIndex + 1) % (text.length + 3);
  //     });
  //   }, 200); // Adjust the interval as needed

  //   return () => clearInterval(interval);
  // }, [text]);

  const shift = () => {
    if (!firing) {
      setFiring(true);
      let i = -1;
      const interval = setInterval(() => {
        i++;
        console.log(currentWordIndex);
        if (i === text.length + 3) {
          setCurrentWordIndex(0);
          clearInterval(interval);
          setFiring(false);
        }
        setCurrentWordIndex(() => {
          // console.log(currentWordIndex);
          return i;
        });
      }, 200); // Adjust the interval as needed
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAppeared) {
            setIsVisible(true);
            setHasAppeared(true);
            shift();
            setTimeout(() => {
              setIsVisible(false);
            }, 500);
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
    <div className="py-10 text-text">
      <div
        className={` bg-stone-200 overflow-y-visible overflow-x-clip max-w-[75%] mx-auto rounded-3xl`}
        ref={sectionRef}
      >
        <div
          className={`py-5 bg-stone-200 grid grid-cols-3 items-center max-w-[90%] mx-auto`}
        >
          <div className="">
            <div className="flex" onMouseEnter={shift}>
              {/* overflow-x-hidden overflow-y-visible*/}
              <img
                className=" flex-1 overflow-visible object-scale-down py-2 transform transition-transform duration-300"
                src="/axon/static/people.png"
                alt="Three people connected"
              />
            </div>
          </div>
          <div className="col-span-2 flex flex-wrap  text-black xl:text-4xl font-light ml-8">
            {/* items-center justify-center align-middle */}
            {text.map((word, index) => (
              <p
                key={index}
                className={` ${index === 0 ? "text-[#bcbdbc]" : ""} ${
                  index === 2 ? "text-[#5c9d51]" : ""
                } ${index === 4 ? "text-[#f3c350]" : ""} ${
                  index <= currentWordIndex - 1 ? " animate-shifting" : ""
                }`}
              >
                <span>{word} &nbsp; </span>
              </p>
            ))}
          </div>
          {/* <span
            className={currentWordIndex % 2 === 0 ? "animate-shifting" : ""}
          >
            dsfafd
          </span>
          <span
            className={currentWordIndex % 2 === 0 ? "animate-shifting" : ""}
          >
            dsfafd
          </span> */}
        </div>
      </div>
    </div>
  );
}

export default RightText;
