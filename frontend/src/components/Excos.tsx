import { excosData } from '../assets';

const Excos = () => {
  const excoTemplate = excosData.map(
    (exco: { name: string; img: string; post: string }, i: number) => (
      <div
        key={i}
        className='flex flex-col gap-2 aspect-[288/343] max-w-[230px]'>
        <figure className='bg-awobe rounded-tl-[65%] rounded-br-[65%]  w-full h-full overflow-hidden'>
          <img
            src={exco.img}
            alt=''
            className='object-center pt-6 rounded-tl-[175px] w-full h-full'
          />
        </figure>
        <figcaption className='flex flex-col'>
          <div className='text-awobe text-[14px] font-awobeVerdana self-stretch font-medium leading-[34.531px]'>
            {exco.name}
          </div>
          <div className='text-awobe-white text-[12px] font-roboto leading-[24px] font-normal'>
            {exco.post}
          </div>
        </figcaption>
      </div>
    )
  );
  return (
    <section className='flex flex-col bg-awobe-black py-[70px] px-[54px] max-tablet:px-0 gap-[60px]'>
      <h3 className='text-awobe text-center font-awobeVerdana text-[32px] font-bold leading-10 max-tablet:text-[20px]'>
        AWBE National EXCO
      </h3>
      <div className='flex flex-wrap justify-around items-center w-full gap-y-20'>
        {excoTemplate}
      </div>
    </section>
  );
};

export default Excos;
