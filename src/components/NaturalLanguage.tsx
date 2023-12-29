import React, { useEffect, useState, useRef } from "react";

const Navbar: React.FC = () => {
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
    <div className="text-white py-10">
      <div ref={sectionRef} className="mx-auto max-w-[95%] ">
        <div className="mx-auto grid max-w-[95%] grid-cols-2 items-center py-5">
          <div className="relative">
            <img
              src="../static/python_execute.png"
              alt="python execute"
              className="w-full object-scale-down"
            />
            <div className="absolute bottom-0 right-0 h-full w-[30%] bg-gradient-stop-20 bg-gradient-to-r from-transparent to-cat-night-background to-90%"></div>
          </div>
          <div className="items-center justify-center align-middle overflow-x-hidden ">
            <p
              className={`ml-4 text-cat-night-white xl:text-4xl font-light overflow-x-hidden py-1 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              } transition-all duration-1000 ease-in-out`}
            >
              Performes natural language tasks by generating Python code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
