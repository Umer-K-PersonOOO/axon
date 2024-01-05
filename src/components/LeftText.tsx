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
            <img
              className=" rounded-[32px] flex-1 object-scale-down  py-2 transform transition-transform duration-300 hover:scale-125"
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
