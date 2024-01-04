import React, { useEffect, useState, useRef } from "react";

const VoteText: React.FC = () => {
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
    <div ref={sectionRef} className="py-16 bg-stone-400">
      <p
        className={`text-2xl font-bold text-center ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[1rem]"
        } transition-all duration-1000 ease-in-out`}
      >
        Axon API is currently in development. Vote for one idea if you are
        excited to see it!
      </p>
    </div>
  );
};

export default VoteText;
