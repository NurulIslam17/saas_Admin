import React from "react";

function Layout() {
  return (
    <>
      <div className="bg-slate-300 py-4">
        <div className="container mx-auto px-4">
          <div className="flex-auto w-15">
            <span>Logo</span>
          </div>

          <div className="f">
            <span>Name</span>
            <span>Image</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
         <div className="bg-slate-300 w-4/12">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, incidunt perspiciatis. Natus, officiis dolor sed porro magnam animi facilis totam est nobis. Quae eligendi doloremque recusandae illo reprehenderit sapiente quidem!</p>
         </div>

         <div className="w-auto">
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, cumque. Odit, molestias distinctio nostrum provident amet quam cumque deserunt, blanditiis, atque dolor molestiae tempore nam temporibus quisquam aliquid velit voluptatibus?</p>
         </div>
      </div>
    </>
  );
}

export default Layout;
