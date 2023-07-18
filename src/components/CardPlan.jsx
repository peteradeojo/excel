import React from "react";

function CardPlan({ name, price, description }) {
  return (
    <div className="flex max-w-xl flex-col gap-y-14 rounded-md border border-black bg-[hsl(0,0%,5%)] px-8 py-6 text-[hsl(0,0%,95%)]">
      {/* Card Top */}
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="text-center text-3xl font-extralight">{name}</div>

        <div className="flex flex-col items-center">
          <div className="text-4xl font-medium">{price}</div>
          <div className="text-xs uppercase tracking-widest text-red-600">
            per session
          </div>
        </div>
      </div>

      {/* Card Bottom */}
      <div className="flex h-full flex-col items-center justify-between gap-y-5">
        <p className="text-center text-lg">{description}</p>

        <div>
          <a href="/membership#">
            <button className="btn3 border-white bg-transparent text-white hover:border-red-600 hover:bg-white hover:text-black">
              Join
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardPlan;
