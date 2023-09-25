import { logo } from '../assets';
import { sponsorArray, footerLinks } from '../utils/constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  const menuTemplate = footerLinks.map(
    (link: { name: string; to: string }, i) => (
      <Link key={i} to={link.to} className='font-roboto'>
        {link.name}
      </Link>
    )
  );
  const sponsors = sponsorArray.map((sponsor, index) => {
    return (
      <figure
        key={index}
        className='w-[40px] aspect-[140/107] flex gap-2 items-center'>
        <img src={sponsor.img} className='object-contain' />
        <figcaption className='font-roboto text-[12px] text-awobe-black'>
          {sponsor.name}
        </figcaption>
      </figure>
    );
  });
  // return (
  //   <footer className='flex flex-col bg-awobe px-[60px] py-[50px] items-center gap-10'>
  //     <menu className='flex justify-between w-[70%] text-[12px] font-semibold'>
  //       {menuTemplate}
  //     </menu>
  //     <div className='flex justify-between w-[50%] items-center'>
  //       {sponsors}
  //     </div>
  //     <div className='border-t-[0.05px] border-[#00000080] w-full'></div>
  //     <div className='flex items-center gap-4'>
  //       <figure className='aspect-[79/65] w-[75px]'>
  //         <img src={logo} alt='' />
  //       </figure>
  //       <div>&copy; {new Date().getFullYear()}. All rights reserved.</div>
  //     </div>
  //   </footer>
  // );
  return (
    <footer className='flex flex-col bg-awobe py-[50px] items-center gap-10'>
      <div className='flex max-tablet:gap-2 gap-10 w-full justify-around tablet:justify-start tablet:px-5 max-smallMobile:gap-5 max-smallMobile:flex-col max-smallMobile:px-5'>
        <menu className='flex flex-col gap-3'>
          <h3 className='text-[16px] font-semibold font-awobeVerdana'>Links</h3>
          <div className='flex flex-col text-[12px] font-normal leading-9'>
            {menuTemplate}
          </div>
        </menu>
        <div className='flex flex-col gap-4'>
          <h3 className='text-[16px] font-semibold font-awobeVerdana'>
            Sponsors
          </h3>
          <div className='flex flex-col gap-4 text-[12px] font-normal'>
            {sponsors}
          </div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <figure className='aspect-[79/65] w-[45px]'>
          <img src={logo} alt='' />
        </figure>
        <div className='text-[12px] tracking-wide font-medium'>
          &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
