import { sponsor1, sponsor2, sponsor3 } from '../assets';

const Sponsors = () => {
  const sponsorArray = [sponsor1, sponsor2, sponsor3];
  const sponsors = sponsorArray.map((sponsor, index) => {
    return (
      <div key={index} className='w-[100px] aspect-[140/107]'>
        <img src={sponsor} className='object-contain' />
      </div>
    );
  });
  return (
    <section className='bg-awobe text-[32px] flex flex-col gap-[13px] pt-[20px] pb-[37px] items-center'>
      <h4 className='text-[#161616] text-center font-awobeVerdana leading-[41.6px] font-bold w-3/5 text-[30px]'>
        Some of our sponsors
      </h4>
      <div className='flex justify-around w-4/5 items-center'>{sponsors}</div>
    </section>
  );
};

export default Sponsors;
