import React from "react";

const MainHeader = (props) => {
  return (
    <>
      <div className="flex justify-between mb-4 bg-slate-300 py-2">
        <div>
          <h1 className="font-mono font-extrabold text-[25px] p-2">
            {props.name}
          </h1>
        </div>

        <div className={props.modalId ? "block" : "hidden"}>
          <h1 className="font-mono font-extrabold text-[25px] p-2">
            <button className="btn  btn-primary text-lg font-extrabold">
              Create
            </button>
          </h1>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
