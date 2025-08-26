import { memo } from "react";

const Louding = () => {
  return (
    <div className="continer">
      <div className="flex justify-center  mt-[100px]">
        <div className="w-[400px] h-[250px] bg-gray-200 border rounded-2xl flex flex-col items-center p-5 gap-5"></div>
      </div>
    </div>
  );
};

export default memo(Louding);
