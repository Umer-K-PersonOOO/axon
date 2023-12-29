// Items may not be vertically aligned: check to see if it is: className=" "
// Fix small spacing prob
function PlannedFeatures() {
  return (
    <div
      className={` bg-cat-night-background grid xl:grid-cols-4 xl:grid-rows-1 sm:grid-rows-3 sm:gap-4 py-10 pb-20`}
    >
      <div className="xl:col-span-1 flex justify-center items-center mx-2">
        <p className={`text-center text-cat-white text-6xl  font-bold flex-1`}>
          Planned Features
        </p>
      </div>
      <div className="xl:col-span-3">
        <div className="grid xl:grid-cols-2 sm:gird-rows-2 gap-8 justify-items-stretch mx-12">
          <div className="rounded-xl bg-cat-night-button text-cat-white text-center xl:py-12 sm:py-4">
            Automate Code Debugging
          </div>
          <div className="rounded-xl bg-cat-night-button text-cat-white text-center xl:py-12 sm:py-4">
            Web search and results summerization
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlannedFeatures;
