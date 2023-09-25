const PageTemplate = ({
  Title,
  Paragraph,
  Img,
}: Record<'Title' | 'Paragraph' | 'Img', string>) => {
  return (
    <div className='bg-awobe-white flex max-tablet:flex-col max-tablet:p-5 max-tablet:gap-5'>
      <div className='w-1/2 flex justify-center items-center max-tablet:w-full'>
        <img
          src={Img}
          alt={Title}
          className='object-cover object-center w-[80%] rounded-xl h-[80%]'
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
  );
};

export default PageTemplate;
