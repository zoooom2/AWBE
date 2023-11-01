import { Link } from 'react-router-dom';
import { image1x1, image1x2, image2x1, image2x2 } from '../assets';

const Experience = () => {
  const template = (
    arr: { heading: string; paragraph: string; link: string }[]
  ) => {
    const structure = arr.map((x, i) => (
      <Link
        to={x.link}
        key={i}
        className='text-awobe-black flex flex-col py-[28px] px-[10px] items-center gap-[5px] rounded-[8px] border border-awobe-black w-[90%] hover:bg-awobe-black hover:text-awobe max-tablet:hover:bg-awobe max-tablet:hover:text-awobe-black'>
        <h5 className='self-stretc text-center font-roboto text-xl leading-[36px] font-medium'>
          {x.heading}
        </h5>
        <p className='text-center font-roboto text-[12px] font-medium leading-[21px]'>
          {x.paragraph}
        </p>
      </Link>
    ));
    return structure;
  };
  return (
    <>
      <section className='bg-awobe flex flex-col items-center py-7 gap-[48px] px-2 relative'>
        <h3 className='font-awobeVerdana text-[30px] font-bold leading-[38px] w-[45%] text-center max-tablet:w-10/12 max-tablet:leading-[45px] max-tablet:text-[24px] max-smallMobile:leading-[40px]'>
          Experience the culture of the{' '}
          <span className='text-awobe-rose'>Eggon people</span>
        </h3>
        <div className='flex flex-col gap-5 items-center tablet:hidden'>
          {template([
            {
              heading: 'Language and Dialect',
              paragraph:
                'Get to know about the breath taking language of the people of Eggon',
              link: '/language-and-dialect',
            },
            {
              heading: 'Delicious cuisine',
              paragraph:
                'Have a life changing experience with the special delicacy of Eggon',
              link: '/delicious-cuisine',
            },
            {
              heading: 'Traditional Festivals',
              paragraph:
                'Dive deep into an experience of  unique cultural festival',
              link: '/trad-fest',
            },
            {
              heading: 'Art and Craft',
              paragraph:
                'Get to understand and see the extremely beautiful craft of Eggon',
              link: '/art-and-craft',
            },
            {
              heading: 'Problems/Opportunities',
              paragraph: 'understand the problems and opportunities of Eggon',
              link: '/problems-and-opportunities',
            },
          ])}
        </div>
        <div className='flex justify-center w-full gap-[2.5%] max-tablet:hidden'>
          <div className='w-1/4 flex flex-col  gap-[32px] items-center max-laptop:w-[48%]'>
            {template([
              {
                heading: 'Language and Dialect',
                paragraph:
                  'Get to know about the breath taking language of the people of Eggon',
                link: '/language-and-dialect',
              },
              {
                heading: 'Delicious cuisine',
                paragraph:
                  'Have a life changing experience with the special delicacy of Eggon',
                link: '/delicious-cuisine',
              },
            ])}
          </div>
          <div className='grid grid-cols-2 grid-rows-2 w-[45%] place-items-center h-[100%] gap-2 self-center max-laptop:hidden'>
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
          <div className='w-[25%] flex flex-col gap-[32px] items-center max-laptop:w-[48%]'>
            {template([
              {
                heading: 'Traditional Festivals',
                paragraph:
                  'Dive deep into an experience of  unique cultural festival',
                link: '/trad-fest',
              },
              {
                heading: 'Art and Craft',
                paragraph:
                  'Get to understand and see the extremely beautiful craft of Eggon',
                link: '/art-and-craft',
              },
              {
                heading: 'Problems/Opportunities',
                paragraph: 'understand the problems and opportunities of Eggon',
                link: '/problems-and-opportunities',
              },
            ])}
          </div>
        </div>
        <div className='absolute bg-[rgba(9,9,9,0.10)] bottom-0 left-0 w-2/12 h-1/6 max-tablet:hidden max-laptop:w-[40%]'></div>
        <div className='absolute bg-[rgba(9,9,9,0.10)] bottom-0  w-2/12 h-[20%] max-laptop:left-[5%] left-[3%] max-tablet:hidden max-laptop:w-[40%]'></div>
      </section>
    </>
  );
};

export default Experience;
