import { discoverImg } from '../assets';

const Discover = () => {
  return (
    <section className='flex items-center py-[75px] bg-awobe-black justify-between'>
      <div className='w-1/2 flex justify-center items-center'>
        <div className='h-[450px] w-[85%]'>
          <img
            src={discoverImg}
            alt=''
            className='rounded-3xl border-0 h-full object-fill'
          />
        </div>
      </div>
      <div className='w-1/2'>
        <div className=' w-11/12 flex flex-col justify-center gap-[22px]'>
          <h3 className='font-awobeVerdana text-[30px] leading-10 text-awobe-white font-bold'>
            <span className='text-awobe'>
              Discover the fascinating traditions of the
            </span>{' '}
            Eggon Tribe{' '}
          </h3>
          <p className='w-11/12 font-roboto text-[#ffffff80] text-[14px] leading-[24px] tracking-[0.002em]'>
            The Eggon people have a rich cultural heritage and practice various
            customs and traditions. They have elaborate rites of passage for
            important life events such as birth, marriage, and death. Their
            cultural festivals, such as the Nnungu Festival, serve as occasions
            for thanksgiving and cultural display. Community gatherings and
            ceremonies are essential for maintaining social cohesion.
            Maintenance of the Eggon Cultural heritage majorly organize by The
            Ame Wo Ba Eggon as a festival at the end of every year, which brings
            the Eggon people from diaspora and within to celebrate and meet with
            family, that which is celebrates in their ancestral town of Lafia
            and Nassarawa Eggon
          </p>
        </div>
      </div>
    </section>
  );
};

export default Discover;
