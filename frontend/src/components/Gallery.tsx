import React from 'react';

const Gallery = () => {
  return (
    <section className='bg-awobe-white py-[60px] flex flex-col gap-[55px]'>
      <div className='flex flex-col gap-[9px] items-center'>
        <h3 className='text-awobe-black text-center font-awobeVerdana text-[30px] font-bold leading-[48px]'>
          Tribe Gallery
        </h3>
        <p className='text-[#00000080] font-roboto text-[14px] font-normal leading-[24px]'>
          Explore the vibrant life style of the Eggon people
        </p>
      </div>
      <div>
        <div>
          <img src='' alt='' />
        </div>
        <div>
          <img src='' alt='' />
        </div>
        <div>
          <img src='' alt='' />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
