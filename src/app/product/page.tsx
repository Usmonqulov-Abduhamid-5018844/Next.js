"use client";

import { api } from "@/api";
import Image from "next/image";
import { it } from "node:test";
import { memo, useEffect, useState } from "react";

interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  thumbnail: string;
}
interface IRespons {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

const Product = () => {
  const [data, setData] = useState<IRespons | null>(null);
  useEffect(() => {
    api.get("products").then((res) => setData(res.data));
  }, []);

  return (
    <div className="continer mt-[100px] mb-[50px]">
       <span className="flex justify-center text-2xl font-bold mb-6">Rroduct</span>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {data?.products?.map((item: IProduct) => (
          <div key={item.id} className=" border-1 border-gray-300 rounded-2xl flex flex-col font-bold">
            <div className="w-auto h-[300px]">
              <Image className="w-full h-full" src={item.thumbnail} alt="" width={250} height={300} />
            </div>
            <div className="flex flex-col p-2 text-gray-500">
              <h1 title={item.title} className="truncate">
                {item.title}
              </h1>
              <span className="text-red-500">{item.price} $</span>
              <span className="text-emerald-500">{item.rating} Rating </span>
              <span>{item.category}</span>
              <p title={item.description} className="line-clamp-3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Product);
