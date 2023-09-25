import { gall1, gall2, gall3 } from '../assets';

const Gallery = () => {
  return (
    <section className='bg-awobe-white pt-[50px] pb-[130px] justify-center flex flex-col gap-[50px]'>
      <div className='flex flex-col gap-[9px] items-center'>
        <h3 className='text-awobe-black text-center font-awobeVerdana text-[30px] font-bold leading-10 max-tablet:text-[24px]'>
          Tribe Gallery
        </h3>
        <p className='text-[#00000080] font-roboto text-[12px] font-normal leading-[24px]'>
          Explore the vibrant life style of the Eggon people
        </p>
      </div>
      <div className='flex w-full h-[300px] flex-wrap justify-around px-[40px] max-tablet:px-3 gap-5 max-tablet:justify-start'>
        <div className='w-[30%] aspect-[418/429] max-tablet:w-[45%]'>
          <img src={gall1} alt='' className='h-full w-full' />
        </div>
        <div className='w-[30%] aspect-[418/429] max-tablet:w-[45%]'>
          <img src={gall2} alt='' className='h-full w-full' />
        </div>
        <div className='w-[30%] aspect-[418/429] max-tablet:w-[45%]'>
          <img src={gall3} alt='' className='h-full w-full' />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
