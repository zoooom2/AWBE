// import { gall1, gall2, gall3 } from '../assets';

const Gallery = () => {
  return (
    <section className='bg-awobe-black pt-[50px] pb-[50px] justify-center flex flex-col gap-[50px]'>
      <div className='flex flex-col gap-[9px] items-center'>
        <h3 className='text-awobe text-center font-awobeVerdana text-[30px] font-bold leading-10 max-tablet:text-[24px]'>
          Tribe Gallery
        </h3>
        <p className='text-awobe opacity-70 font-roboto text-[12px] font-normal leading-[24px]'>
          Explore the vibrant life style of the Eggon people
        </p>
      </div>
      <div className='flex w-full flex-wrap justify-around px-[40px] max-tablet:px-3 gap-5 max-tablet:justify-start'>
        <div className='w-[30%] aspect-[418/429] max-tablet:w-[45%]'>
          <img
            src={
              'https://res.cloudinary.com/dlk2a6ppp/image/upload/w_500/v1696934557/Awobe%20pictures/0G5A4284_lfedhu.jpg'
            }
            alt=''
            className='h-full w-full rounded-2xl'
          />
        </div>
        <div className='w-[30%] aspect-[418/429] max-tablet:w-[45%]'>
          <img
            src={
              'https://res.cloudinary.com/dlk2a6ppp/image/upload/w_500/v1696934549/Awobe%20pictures/0G5A4262_belofj.jpg'
            }
            alt=''
            className='h-full w-full rounded-2xl'
          />
        </div>
        <div className='w-[30%] aspect-[418/429] max-tablet:w-[45%]'>
          <img
            src={
              'https://res.cloudinary.com/dlk2a6ppp/image/upload/w_500/v1696934552/Awobe%20pictures/0G5A4269_rxpy6c.jpg'
            }
            alt=''
            className='h-full w-full rounded-2xl '
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
