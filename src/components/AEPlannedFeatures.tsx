// // Items may not be vertically aligned: check to see if it is:
// function AEPlannedFeatures() {
//   return (
//     <div
//       className={`bg-slate-600 grid xl:grid-cols-4 xl:grid-rows-1  sm:gap-4 py-10`} // sm:grid-rows-3
//     >
//       <div className="xl:col-span-1 flex justify-center items-center mx-2">
//         <p className={`text-center text-white text-6xl font-bold`}>
//           Planned Features
//         </p>
//       </div>
//       {/* sm:row-span-3 */}
//       <div className="xl:col-span-3 ">
//         <div className="grid xl:grid-cols-3 sm:grid-rows-3 gap-8 justify-items-stretch mx-12">
//           <div className="rounded-xl bg-slate-300 text-black text-center py-12">
//             Question - Answering about your codebase
//           </div>
//           <div className="rounded-xl bg-slate-300 text-black text-center py-12">
//             Inline code generation by natural language resources
//           </div>
//           <div className="rounded-xl bg-slate-300 text-black text-center py-12">
//             Wrtie psuedocode and compile them in any language
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//

// Items may not be vertically aligned: check to see if it is: className=" "
// Fix small spacing prob
function AEPlannedFeatures() {
  return (
    <div
      className={` bg-undertone-red grid xl:grid-cols-4 xl:grid-rows-1 sm:grid-rows-3 sm:gap-4 py-10`}
    >
      <div className="xl:col-span-1 flex justify-center items-center mx-2">
        <p className={`text-center text-text text-6xl  font-bold flex-1`}>
          Planned Features
        </p>
      </div>
      <div className="xl:col-span-3">
        <div className="grid xl:grid-cols-3 sm:gird-rows-2 gap-8 justify-items-stretch mx-12">
          <div className="rounded-xl bg-accent-light text-black text-center py-12 mx-1">
            Question - Answering about your codebase
          </div>
          <div className="rounded-xl bg-accent-light text-black text-center py-12 mx-1">
            Inline code generation by natural language resources{" "}
          </div>{" "}
          <div className="rounded-xl bg-accent-light text-black text-center py-12 mx-1">
            Wrtie psuedocode and compile them in any language{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AEPlannedFeatures;
