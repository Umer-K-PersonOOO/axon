import React, { useEffect, useState, useRef } from "react";

const Develop: React.FC = () => {
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

            setTimeout(() => {
              setIsVisible(false);
            }, 500);
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

  return (
    <div className="py-10 text-text">
      <div
        className={` bg-stone-200 overflow-y-visible overflow-x-clip max-w-[75%] mx-auto rounded-3xl`}
      >
        <div
          className={`py-5 bg-stone-200 grid grid-cols-3 items-center max-w-[90%] mx-auto`}
        >
          <div className="">
            <div className="flex">
              <span
                className={`${isVisible ? "shaking" : "notification"}`}
                ref={sectionRef}
              >
                <svg
                  fill="#000000"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns-xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 502.664 502.664"
                  xml-space="preserve"
                  className="w-full "
                >
                  <g>
                    <g>
                      <g>
                        <path
                          d="M310.166,397.593H75.951V61.671h234.151v25.13h31.472V54.811C341.595,24.677,316.853,0,286.74,0H99.355
                    C69.199,0,44.522,24.677,44.522,54.811v393.02c0,30.178,24.677,54.833,54.833,54.833H286.74
                    c30.113,0,54.855-24.655,54.855-54.833V397.01h-31.429C310.166,397.01,310.166,397.593,310.166,397.593z M193.015,475.226
                    c-13.892,0-25.108-11.238-25.108-25.108c0-13.913,11.217-25.13,25.108-25.13c13.913,0,25.152,11.238,25.152,25.13
                    C218.167,463.988,206.929,475.226,193.015,475.226z"
                        />
                        <rect
                          x="102.785"
                          y="95.386"
                          width="70.256"
                          height="42.84"
                        />
                        <rect
                          x="102.785"
                          y="205.073"
                          width="70.256"
                          height="42.84"
                        />
                        <rect
                          x="102.785"
                          y="319.873"
                          width="70.256"
                          height="42.818"
                        />
                        <path
                          d="M422.399,223.905c-2.481-12.986-7.507-25.001-14.625-35.506l25.195-25.216l-25.734-25.648l-25.152,25.173
                    c-10.462-7.161-22.541-12.123-35.484-14.625v-35.7h-36.411v35.7c-12.964,2.502-24.936,7.485-35.505,14.625l-25.108-25.173
                    l-25.734,25.669l25.152,25.216c-7.097,10.505-12.101,22.52-14.582,35.484h-35.657v36.39h35.656
                    c2.481,12.921,7.507,24.936,14.603,35.484l-25.173,25.173l25.734,25.626l25.173-25.152c10.527,7.161,22.541,12.144,35.505,14.668
                    v35.635h36.411v-35.656c12.942-2.481,24.936-7.507,35.484-14.625l25.152,25.152l25.734-25.648l-25.195-25.173
                    c7.118-10.505,12.123-22.541,14.625-35.505h35.678l0,0v-36.368H422.399z M328.437,281.693c-21.894,0-39.669-17.688-39.669-39.604
                    c0-21.894,17.774-39.69,39.669-39.69c21.916,0,39.604,17.774,39.604,39.69C368.041,264.026,350.309,281.693,328.437,281.693z"
                        />
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <div className="col-span-2 items-center justify-center align-middle">
            <p className={` text-text xl:text-4xl font-light ml-8`}>
              Develop your own apps that leverage Axon's full suite of services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Develop;
