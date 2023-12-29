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
    // V1
    // <div
    //   className={` ${props.bgColor} grid grid-cols-3 py-3 overflow-y-visible overflow-x-clip items-center`}
    // >
    //   <div className="">
    //     <img
    //       className={`overflow-x-hidden overflow-y-visible object-scale-down py-2 transform transition-transform duration-300 scale-100 hover:scale-100 ${props.passIn}`}
    //       src={`../static/${props.name}`}
    //       alt={props.alt}
    //       onClick={() => {
    //         props.handleClick(props.name);
    //       }}
    //     />

    //     {/* <hr className=" bg-gray-200 border-0 dark:bg-gray-700 max-w-[90%] mx-auto h-20 rounded-md"></hr> */}
    //   </div>
    //   <div className="col-span-2 items-center justify-center align-middle">
    //     <div className="flex">
    //       <hr className=" bg-gray-200 border-0 dark:bg-gray-700 max-w-[2%] mx-auto h-[20px] rounded-md"></hr>
    //       <p
    //         className={`flex-1 text-right xl:text-4xl font-light ml-10 ${props.textColor}`}
    //       >
    //         {props.text}
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="py-10 text-text">
      <div
        className={` ${props.bgColor} overflow-y-visible overflow-x-clip max-w-[75%] mx-auto rounded-3xl`}
      >
        <div
          className={`py-5 ${props.bgColor} grid grid-cols-3 items-center max-w-[90%] mx-auto`}
        >
          <div className="">
            <div className="flex">
              {/* overflow-x-hidden overflow-y-visible*/}
              <img
                className="flex-1 overflow-visible object-scale-down py-2 transform transition-transform duration-300 hover:scale-125"
                src={`../static/${props.name}`}
                alt={props.alt}
                onClick={() => {
                  props.handleClick(props.name);
                }}
              />
            </div>
          </div>
          <div className="col-span-2 items-center justify-center align-middle">
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
