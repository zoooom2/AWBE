import { sponsorArray } from '../utils/constants';

const Sponsors = () => {
  const sponsors = sponsorArray.map((sponsor, index) => {
    return (
      <div key={index} className='flex gap-5 flex-col'>
        <figure className='border-rose-600 h-[100px] max-smallMobile:h-[48px] max-tablet:h-[60px] aspect-[140/107] flex justify-center'>
          <img src={sponsor.img} className='object-contain' />
        </figure>

        <figcaption className='font-awobeVerdana text-[18px] max-smallMobile:hidden max-tablet:hidden text-center font-semibold leading-[28px] text-[rgba(0,0,0,0.8)]'>
          {sponsor.name}
        </figcaption>
      </div>
    );
  });
  return (
    <section className='bg-awobe text-[32px] flex flex-col gap-[13px] pt-[20px] pb-[37px] items-center'>
      <h4 className='text-[#161616] text-center font-awobeVerdana leading-[41.6px] font-bold w-3/5 text-[30px] max-tablet:text-[20px] max-smallMobile:w-full'>
        Some of our sponsors
      </h4>
      <div className='flex justify-around w-4/5 max-smallMobile:w-full items-center flex-wrap gap-2 max-tablet:justify-around'>
        {sponsors}
      </div>
    </section>
  );
};

export default Sponsors;
