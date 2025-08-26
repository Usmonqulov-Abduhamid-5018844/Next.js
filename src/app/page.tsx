import Hero from '@/components/hero/Hero';
import { memo } from 'react';

const Home = () => {
  return (
    <div className="continer">
      <Hero/>
    </div>
  );
};

export default memo(Home);