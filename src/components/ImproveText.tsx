import React, { useEffect, useState, useRef } from "react";

interface Props {
  text: string;
  name: string;
  alt?: string;
  handleClick: Function;
  bgColor?: string;
  textColor?: string;
  passIn?: string;
}

const defaultProps = {
  alt: "Image",
  bgColor: "bg-amber-50 ",
  textColor: "black",
  passIn: "",
};

function RightText(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <div className="py-10 text-text">
      <div
        className={` ${props.bgColor} overflow-y-visible overflow-x-clip max-w-[95%] mx-auto rounded-3xl`}
      >
        <div
          className={`py-5 ${props.bgColor} grid grid-cols-3 items-center max-w-[90%] mx-auto`}
        >
          <div className="">
            <div className="flex">
              {/* overflow-x-hidden overflow-y-visible*/}
              <img
                className={` flex-1 overflow-visible object-scale-down py-2 transform transition-transform duration-300 hover:scale-125`}
                src={`../static/${props.name}`}
                alt={props.alt}
                onClick={() => {
                  props.handleClick(props.name);
                }}
              />
            </div>
          </div>
          <div className="col-span-2 items-center justify-center align-middle ">
            <p className={` ${props.textColor} xl:text-4xl font-light ml-8`}>
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightText;
