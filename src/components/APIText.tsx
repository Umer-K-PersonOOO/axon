import React, { useEffect, useState, useRef } from "react";
let timer: NodeJS.Timer | undefined;
// `linear-gradient(180deg, rgba(0,0,0,1) ${
//     50 + center
//   }%, yellow ${55 + center}%, rgba(0,0,0,1) ${60 + center}%)`
function APIText() {
  const [center, setCenter] = useState("");
  const [firing, setFiring] = useState(false);
  const fire = () => {
    if (!firing) {
      setFiring(true);
      let i = -1;
      timer = setInterval(() => {
        i++;
        if (i >= 50) {
          setCenter("");
          clearInterval(timer);
          setFiring(false);
        } else {
          setCenter(
            `linear-gradient(180deg, rgba(0,0,0,1) ${
              49 + i
            }%, rgba(248,251,253,1) ${50 + i}%, rgba(248,251,253,1) ${
              55 + i
            }%, rgba(0,0,0,1) ${56 + i}%)`
          );
        }
      }, 10);
    }
  };
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
            fire();
          }
        });
      },
      { threshold: 0.99 } // Adjust the threshold as needed
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

  const overlayStyle: React.CSSProperties = {
    maskImage: `url(../static/api.png)`,
    maskSize: "cover",
    maskMode: "alpha",
    backgroundImage: center,
  };

  return (
    <div
      className={` bg-gray-600 overflow-y-visible overflow-x-clip max-w-[75%] mx-auto my-10 rounded-3xl`}
    >
      <div
        ref={sectionRef}
        className={`py-5 bg-gray-600 grid grid-cols-3 items-center max-w-[90%] mx-auto`}
      >
        <div className="col-span-2 items-center justify-center align-middle">
          <p className={` text-cat-night-white xl:text-4xl font-light mr-8`}>
            Supporting a thriving open source community with free access of API
            services and Axon-Powered apps for anyone with an Axon license.
          </p>
        </div>
        <div>
          <div className="relative">
            <div
              className={"absolute top-0 left-0 w-full h-full"}
              style={overlayStyle}
              onMouseEnter={fire}
            ></div>

            <img
              className=" flex-1 w-full h-auto"
              src={`../static/${"api.png"}`}
              alt={"API Cloud"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default APIText;
