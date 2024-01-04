// Items may not be vertically aligned: check to see if it is:
import { HashLink as Link } from "react-router-hash-link";
import React, { useEffect, useState, useRef } from "react";

const AxonProduct: React.FC = () => {
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
      // justify-items-stretch
      ref={sectionRef}
      className={`bg-primary  py-20 gap-8 overflow-x-hidden`}
    >
      <div className="grid grid-cols-3 mx-16 justify-stretch text-3xl font-semibold gap-28 ">
        <div
          className={`flex justify-center items-center ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          } transition-all duration-1000 ease-in-out`}
        >
          <Link
            to={"/axon/suite/#terminal"}
            onClick={() => window.scrollBy(0, 0)}
            className="rounded-xl bg-accent text-black text-center py-12 grow"
          >
            <p className="mx-2">Axon Terminal</p>
          </Link>
        </div>
        <div
          className={`flex justify-center items-center ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          } transition-all duration-1000 ease-in-out`}
        >
          <Link
            to={"/axon/suite/#AE"}
            onClick={() => window.scrollBy(0, 0)}
            className="rounded-xl bg-accent text-black text-center py-12 grow"
          >
            <p className="mx-2">Axon Edit</p>
          </Link>
        </div>
        <div
          className={`flex justify-center items-center ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          } transition-all duration-1000 ease-in-out`}
        >
          <Link
            to={"/axon/suite/#API"}
            onClick={() => window.scrollBy(0, 0)}
            className="rounded-xl bg-accent text-black text-center py-12 grow"
          >
            <p className="mx-2">Axon API</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AxonProduct;
