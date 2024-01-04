import React, { useEffect, useState } from "react";

interface Props {
  img: string;
  turnOff: Function;
}
function ImagePopup({ img, turnOff }: Props) {
  const [play, flipPlay] = useState(false);

  useEffect(() => {
    console.log("Did the thing");
    const timeout = setTimeout(() => {
      flipPlay(img !== "");
      console.log(play);
    }, 100);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [img, play]);

  if (img === "") return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "container") {
      turnOff("");
    }
  };

  return (
    <div
      id="container"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
    >
      <img
        className={`object-scale-down w-[1000px] ${
          // NOT DYNAMIC
          play ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-1rem]"
        } transition-all duration-200 ease-in-out`}
        src={window.location.href + `/static/${img}`}
        alt=""
      />
    </div>
  );
}

export default ImagePopup;
