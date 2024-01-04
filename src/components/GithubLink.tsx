import React, { useEffect, useState, useRef } from "react";

const GithubLink = () => {
  const githubRepoLink = "https://github.com/nik875/axon-terminal";

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
      { threshold: 0.2 } // Adjust the threshold as needed
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
      className={`flex items-center py-8 bg-cat-night-button align-middle justify-center max-w-[50%] mx-auto rounded-[64px] my-20 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
      } transition-all duration-500 ease-in-out`}
    >
      <a
        href={githubRepoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3"
      >
        <img
          src={`/axon/static/github-mark-white.svg`}
          alt="GitHub Logo"
          className="w-10 h-10 mb-2 hover:animate-pulse"
        />
      </a>
      <p className=" text-cat-white px-1">
        Currently in beta release. See documentation and instructions on{" "}
        <a
          href={githubRepoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline "
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
};

export default GithubLink;
