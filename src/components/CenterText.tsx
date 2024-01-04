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

function CenterText(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
  // console.log(`bg-${props.bgColor}`);
  return (
    <div
      className={` ${props.bgColor} items-center justify-center align-middle max-w-[66%] mx-auto rounded-3xl my-12`}
    >
      <p
        className={`text-center lg:text-4xl font-light py-3 ${props.textColor} `}
        // border-b-4 border-white
      >
        {props.text}
      </p>
      <hr className=" bg-gray-200 border-0 dark:bg-gray-700 max-w-[90%] mx-auto h-[2px] rounded-md"></hr>
      <div className="flex justify-center pb-6 pt-2 ">
        <img
          className={`object-contain w-1/2 hover: ${props.passIn}`}
          src={window.location.href + `/static/${props.name}`}
          alt={props.alt}
          onClick={() => {
            props.handleClick(props.name);
          }}
        />
      </div>
    </div>
  );
}

export default CenterText;
