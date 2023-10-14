const PageTemplate = ({
  Title,
  Paragraph,
  Img,
}: Record<'Title' | 'Paragraph' | 'Img', string>) => {
  return (
    <>
      <div className='bg-awobe-white flex max-tablet:flex-col max-tablet:p-5 max-tablet:gap-5 max-tablet:hidden p-6'>
        <div className='w-1/2 flex justify-center items-center max-tablet:w-full pr-5'>
          <img
            src={Img}
            alt={Title}
            className='object-cover object-center  rounded-xl h-[80%]'
          />
        </div>
        <div className='bg-awobe-white flex flex-col gap-5 w-1/2 justify-center max-tablet:w-full'>
          <h3 className='text-awobe-black text-[28px] font-bold font-awobeVerdana leading-[38.4px]'>
            {Title}
          </h3>
          <p className='text-awobe-black text-[16px] font-medium leading-[28px] laptop:w-4/5'>
            {Paragraph}
          </p>
        </div>
      </div>
      <div className='tablet:hidden'>
        <div className='h-[50vh] relative'>
          <img
            src={Img}
            alt={Title}
            className='w-full object-center object-cover h-full'
          />
        </div>
        <div className='p-[30px] flex flex-col gap-[22px] bg-awobe-black min-h-[40vh]'>
          <h3 className='text-awobe-white text-[32px] font-bold font-awobeVerdana leading-[38.4px]'>
            {Title}
          </h3>
          <p className='text-[rgba(255,255,255,0.5)] font-awobeVerdana text-[16px] font-medium leading-[28px]'>
            {Paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default PageTemplate;
