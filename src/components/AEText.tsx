import React, { useEffect, useState, useRef } from "react";

const AEText: React.FC = () => {
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
    <div
      ref={sectionRef}
      className=" bg-undertone my-10 py-6 max-w-[75%] mx-auto rounded-3xl"
    >
      <p
        className={`text-3xl mx-4 font-bold text-center ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[1rem]"
        } transition-all duration-1000 ease-in-out`}
      >
        An Axon-Powered IDE that will drastically accelerate scipting, codebase,
        analysis, and package development
      </p>
    </div>
  );
};

export default AEText;
