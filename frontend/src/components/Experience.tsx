import { image1x1, image1x2, image2x1, image2x2 } from '../assets';

const Experience = () => {
  const template = (arr: { heading: string; paragraph: string }[]) => {
    const structure = arr.map((x, i) => (
      <div
        key={i}
        className='flex flex-col py-[28px] px-[10px] items-center gap-[5px] rounded-[8px] border border-awobe-black w-[90%]'>
        <h5 className='self-stretch text-awobe-black text-center font-roboto text-xl leading-[36px] font-medium'>
          {x.heading}
        </h5>
        <p className='text-center text-[#00000080] font-roboto text-[12px] font-medium leading-[21px]'>
          {x.paragraph}
        </p>
      </div>
    ));
    return structure;
  };
  return (
    <section className='bg-awobe flex flex-col items-center py-7 gap-[48px] px-2'>
      <h3 className='font-awobeVerdana text-[30px] font-bold leading-[38px] w-[45%] text-center'>
        Experience the culture heritage of the{' '}
        <span className='text-awobe-rose'>Eggon people</span>
      </h3>
      <div className='flex justify-center w-full gap-[2.5%]'>
        <div className='w-1/4 flex flex-col  gap-[32px] items-center'>
          {template([
            {
              heading: 'Language and Dialect',
              paragraph:
                'Get to know about the breath taking language of the people of Eggon',
            },
            {
              heading: 'Delicious cuisine',
              paragraph:
                'Have a life changing experience with the special delicacy of Eggon',
            },
          ])}
        </div>
        <div className='grid grid-cols-2 grid-rows-2 w-[45%] place-items-center h-[100%] gap-2 border'>
          <div className=''>
            <img
              src={image1x1}
              alt=''
              className='rounded-tl-full rounded-br-[700px] rounded-tr-[500px]'
            />
          </div>
          <div className=''>
            <img src={image2x1} alt='' className='rounded-xl' />
          </div>
          <div className=''>
            <img src={image1x2} alt='' className='rounded-xl' />
          </div>
          <div className=''>
            <img src={image2x2} alt='' className='rounded-xl' />
          </div>
        </div>
        <div className='w-[25%] flex flex-col gap-[32px] items-center'>
          {template([
            {
              heading: 'Traditional Festivals',
              paragraph:
                'Dive deep into an experience of  unique cultural festival',
            },
            {
              heading: 'Art and Craft',
              paragraph:
                'Get to understand and see the extremely beautiful craft of Eggon',
            },
            {
              heading: 'Problems/Opportunities',
              paragraph: 'understand the problems and opportunities of Eggon',
            },
          ])}
        </div>
      </div>
    </section>
  );
};

export default Experience;
