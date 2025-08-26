"use client"

import { api } from "@/api";
import Image from "next/image";
import { memo, useEffect, useState } from "react";

interface IRecipes {
  id: number;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  difficulty: string;
}

interface IRespons {
  recipes: IRecipes[];
  total: number;
  skip: number;
  limit: number;
}

const Food = () => {
  const [data, setData] = useState<IRespons | null>(null);

  useEffect(() => {
    api.get("recipes").then((res) => setData(res.data));
  }, []);

  return (
    <div className="continer mt-[100px] mb-[50px]">
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {data?.recipes?.map((item) => (
          <div key={item.id} className=" border-1 border-gray-300 rounded-2xl flex flex-col font-bold overflow-hidden">
            <div className="w-auto h-[300px]">
                <Image className="w-full h-full" src={item.image} alt="" width={250} height={300}/>
            </div>
            <div  className="flex flex-col p-2 text-gray-500">
                <h1>{item.name}</h1>
                <span>City: {item.cuisine}</span>
                <span>{item.difficulty}</span>
                <span className="text-emerald-500">Rating {item.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Food);
