interface Props {
  text: string;
  name: string;
  alt?: string;
  handleClick: Function;
  bgColor?: string;
  textColor?: string;
}

const defaultProps = {
  alt: "Image",
  bgColor: "amber-50",
  textColor: "black",
};

function LeftText(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
  return (
    // V1
    // <div
    //   className={`py-3 ${props.bgColor} grid grid-cols-3 overflow-y-visible overflow-x-clip items-center`}
    // >
    //   <div className="col-span-2 items-center justify-center align-middle">
    //     <p
    //       className={` ${props.textColor} xl:text-4xl font-light mr-10 xl:ml-6`}
    //     >
    //       {props.text}
    //     </p>
    //   </div>
    //   <div className="">
    //     <div className="flex">
    //       <img
    //         className="flex-1 overflow-x-hidden overflow-y-visible object-scale-down  py-2 transform transition-transform duration-300 hover:scale-125"
    //         src={window.location.href + `/static/${props.name}`}
    //         alt={props.alt}
    //         onClick={() => {
    //           props.handleClick(props.name);
    //         }}
    //       />
    //     </div>
    //   </div>
    // </div>
    <div
      className={` ${props.bgColor} overflow-y-visible overflow-x-clip max-w-[75%] mx-auto my-10 rounded-3xl`}
    >
      <div
        className={`py-5 ${props.bgColor} grid grid-cols-3 items-center max-w-[90%] mx-auto`}
      >
        <div className="col-span-2 items-center justify-center align-middle">
          <p className={` ${props.textColor} xl:text-4xl font-light mr-8`}>
            {props.text}
          </p>
        </div>
        <div className="">
          <div className="flex">
            {/* overflow-x-hidden overflow-y-visible*/}
            <img
              className="flex-1 overflow-visible object-scale-down  py-2 transform transition-transform duration-300 hover:scale-125"
              src={`/axon/static/${props.name}`}
              alt={props.alt}
              onClick={() => {
                props.handleClick(props.name);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftText;
