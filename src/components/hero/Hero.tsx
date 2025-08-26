"use client";

import React, { memo, useState } from "react";

const Hero = () => {
  const [counter, setCounter] = useState(0);
  const [inp, setInp] = useState("")

  const hendleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    setCounter((p)=> inp ? p + Number(inp): 0)

  }
  const hendleReset = () => {
    setCounter((p)=> (p = 0))
    setInp("")
  }

  return (
    <div className="flex justify-center  mt-[100px]">
      <div className="w-[400px] border rounded-2xl flex flex-col items-center p-5 gap-5">
        <div>
          <form onSubmit={hendleSubmit} action="" className="flex gap-5">
            <input
            value={inp}
            onChange={(e)=> setInp(e.target.value)}
              className="border outline-none indent-4 py-1 rounded-[5px]"
              type="number"
              name=""
              id=""
            />
            <button className="border py-1 px-4 rounded-[5px]">Submit</button>
          </form>
        </div>
        <h2 className="text-[20px]">Counter: {counter}</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setCounter((p) => inp ? p + Number(inp): p +1)}
            className=" py-1 px-4 rounded-lg bg-blue-600 font-bold text-white"
          >
            Increment
          </button>
          <button
            disabled={counter <= 0}
            onClick={() => setCounter((p) => inp ? p - Number(inp) : p - 1)}
            className=" py-1 px-4 rounded-lg bg-blue-600 font-bold text-white "
          >
            decrement
          </button>
        </div>
        <div>
          <button
            onClick={() => hendleReset()}
            className=" py-1 px-4 rounded-lg bg-blue-600 font-bold text-white "
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
