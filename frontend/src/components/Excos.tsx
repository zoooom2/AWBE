import { excosData } from '../assets';
import { Link, useLocation } from 'react-router-dom';

const Excos = () => {
  const location = useLocation();
  const isExcosPage = location.pathname.endsWith('excos');
  let data = [] as typeof excosData;

  if (!isExcosPage) {
    data = excosData.slice(0, 3);
  } else {
    data = excosData;
  }

  const excoTemplate = data.map(
    (exco: { name: string; img: string; post: string }, i: number) => (
      <div
        key={i}
        className='flex flex-col gap-2 aspect-[288/343] laptop:w-[220px] w-[170px]'>
        <figure className='bg-awobe rounded-tl-[75%] rounded-br-[70%] w-full h-[200px] laptop:h-[250px] overflow-hidden'>
          <img
            src={exco.img}
            alt=''
            className='object-center pt-4 rounded-tl-[140px] w-full h-full'
          />
        </figure>
        <figcaption className='flex flex-col'>
          <div className='text-awobe text-[14px] font-awobeVerdana self-stretch font-medium leading-[28px]'>
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
      <h3 className='text-awobe text-center font-awobeVerdana text-[32px] font-bold leading-10 max-tablet:text-[24px]'>
        AWBE BOT
      </h3>
      <div className='flex max-tablet:justify-center gap-5 flex-wrap items-center w-full justify-evenly'>
        {/* <div className='flex flex-wrap justify-start max-tablet:justify-evenly gap-10'> */}
        {excoTemplate}
        {/* </div> */}
      </div>
      {!isExcosPage && (
        <Link
          to={'/excos'}
          className='text-right text-white px-3 hover:text-awobe cursor-pointer justify-items-start'>
          SEE MORE
        </Link>
      )}
    </section>
  );
};

export default Excos;
