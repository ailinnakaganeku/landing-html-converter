import React from "react";

export function Header() {
  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex flex-row items-start justify-start mq750:hidden">
        <div className="bg-[#00FF9D] text-black flex flex-row items-center justify-center py-2 px-[7px]">
          <h3 className="m-0 relative text-inherit leading-[120%] font-bold font-[inherit]">
            HTML
          </h3>
        </div>
        <div className="flex-1 bg-black flex flex-row items-center justify-center py-2 px-[7px] text-[#00FF9D]">
          <h3 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-[inherit]">
            CONVERTER
          </h3>
        </div>
      </div>
      <div className="md:flex flex-row items-start justify-start hidden">
        <div className="bg-[#00FF9D] text-black flex flex-row items-center justify-center py-2 px-[7px]">
          <h3 className="m-0 relative text-inherit leading-[120%] font-bold font-[inherit]">
            HTML
          </h3>
        </div>
        <div className="flex-1 bg-black flex flex-row items-center justify-center py-2 px-[7px] text-[#00FF9D]">
          <h3 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-[inherit]">
            CONVERTER
          </h3>
        </div>
      </div>
    </header>
  );
}
