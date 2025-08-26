import Link from 'next/link';
import { memo } from 'react';

const Headers = () => {
  return (
   <div className='bg-gray-300'>
     <div className="continer py-3 flex justify-center gap-15 text-[20px] font-bold">
     <Link href={"/"}>Home</Link>
     <Link href={"user"}>User</Link>
     <Link href={"product"}>Product</Link>
     <Link href={"food"}>Food</Link>
    </div>
   </div>
  );
};

export default memo(Headers);