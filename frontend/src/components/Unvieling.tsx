import React from 'react';
import { uv1, uv2, uv3, uv4, uv5, uv6 } from '../assets';

const Unvieling = () => {
  const imageArray1 = [uv1, uv2, uv3, uv4, uv5, uv6];

  const gallery1 = imageArray1.map((image, index) => {
    return (
      <div>
        <img src={image} alt={`image${index}`} />
      </div>
    );
  });
  const gallery2 = [...gallery1].reverse();
  return (
    <section className='flex h-screen px-10 gap-4 overflow-hidden bg-awobe-white'>
      <div className='w-1/2 h-[90%] px-4 flex flex-col gap-[30px] justify-center'>
        <h1 className='font-awobeVerdana font-bold leading-[55.2px] text-awobe-black text-[42px] '>
          Unveiling The Resilience And Rich Heritage of The{' '}
          <span className='bg-awobe-black text-awobe'>Eggon Tribe</span>
        </h1>
        <div className='text-[#00000080]'>
          Explore the world of the Eggon people and immerse yourself in their
          breathtaking culture. Take in the richness of their festivals,
          cuisine, and rituals.
        </div>
      </div>
      <div className='w-1/2 flex gap-4'>
        <div className='flex flex-col gap-4'>{gallery1}</div>
        <div className='flex flex-col gap-4'>{gallery2}</div>
      </div>
    </section>
  );
};

export default Unvieling;
