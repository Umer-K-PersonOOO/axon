import React, { useEffect, useState, useRef } from "react";

const IntoHand: React.FC = () => {
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
      className={` bg-gray-600 overflow-y-visible overflow-x-clip max-w-[75%] mx-auto my-10 rounded-3xl`}
    >
      <div
        className={`py-5 bg-gray-600 grid grid-cols-3 items-center max-w-[90%] mx-auto`}
      >
        <div className="col-span-2 items-center justify-center align-middle">
          <p className={` text-stone-50 xl:text-4xl font-light mr-8`}>
            Putting the power of Axon into the hands of scienctists and
            developers around the world.
          </p>
        </div>
        <div className="">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-full fill-current text-[#5c9d51] ${
                isVisible ? "rotate-0" : "rotate-[45deg]"
              } transition-all duration-[4000ms] ease-out`}
            >
              <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default IntoHand;
