interface Props {
  handleClick: Function;
}

function RightItalized(props: Props) {
  return (
    <div
      className={` bg-cat-wild-sand py-3 grid grid-cols-3 overflow-y-visible overflow-x-clip items-center max-w-[75%] mx-auto my-10 rounded-3xl`}
    >
      <div className="">
        <img
          className=" overflow-x-hidden overflow-y-visible object-scale-down h-80 ml-7 px-6 py-2 transform transition-transform duration-300 scale-100 hover:scale-125"
          src={`/axon/static/sci_stuff.png`}
          alt="Screenshot"
          onClick={() => {
            props.handleClick("sci_stuff.png");
          }}
        />
      </div>
      <div className=" col-span-2">
        <p className={`text-left xl:text-4xl font-light ml-16`}>
          A second brain that lets you focus on{" "}
          <span className="italic font-bold">your</span> science instead of
          computer science
        </p>
      </div>
    </div>
  );
}

export default RightItalized;
