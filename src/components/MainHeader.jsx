import React from "react";

const MainHeader = (props) => {
  return (
    <>
      <div className="flex flex-row mb-4 bg-slate-300 py-2">
        <div>
          <h1 className="font-mono font-extrabold text-[25px] p-2">
            {props.name}
          </h1>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
