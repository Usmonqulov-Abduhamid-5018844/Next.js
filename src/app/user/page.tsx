"use client";
import { api } from "@/api";
import Image from "next/image";
import { it } from "node:test";
import { memo, useEffect, useState } from "react";

interface IRespons {
  users: IUsers[];
  limit: number;
  skip: number;
  total: number;
}

interface IUsers {
  id: number;
  firstName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  password: string;
  birthDate: string;
  image: string;
}

const User = () => {
  const [data, setData] = useState<IRespons | null>(null);
  useEffect(() => {
    api.get("users").then((res) => setData(res.data));
  }, []);

  return (
    <div className="continer mt-[100px] mb-[50px]">
        <span className="flex justify-center text-2xl font-bold mb-6">Users</span>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {data?.users?.map((item: IUsers) => (
          <div key={item.id} className=" border-1 border-gray-400 rounded-2xl flex flex-col font-bold">
            <div className="w-auto h-[300px]">
                <Image className="w-full h-full" src={item.image} alt="" width={250} height={300}/>
            </div>
            <div className="flex flex-col p-2">
            <h1 title={item.email}  className="truncate">{item.email}</h1>
            <span>{item.birthDate}</span>
            <span>{item.age} Yera</span>
            <span>{item.firstName}</span>
            <span>{item.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(User);
