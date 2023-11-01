import { logo } from '../assets';
import { footerLinks, socialsConstant } from '../utils/constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  const menuTemplate = footerLinks.map(
    (link: { name: string; to: string }, i) => (
      <Link
        key={i}
        to={link.to}
        className='font-roboto text-[16px] font-semibold leading-6'>
        {link.name}
      </Link>
    )
  );
  const socials = socialsConstant.map((social, index) => {
    return (
      <figure
        key={index}
        className='w-[40px] aspect-[140/107] flex gap-2 items-center cursor-pointer justify-center'>
        <div>
          <social.logo />
        </div>
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
      <div className='flex max-tablet:gap-2 gap-10 w-full justify-around tablet:justify-between tablet:px-5 max-smallMobile:gap-5 max-smallMobile:flex-col max-smallMobile:px-5'>
        <menu className='flex flex-col gap-3'>
          <div className='flex flex-col gap-[22px] font-normal'>
            {menuTemplate}
          </div>
        </menu>
        <div className='flex flex-col gap-4'>
          <h3 className='text-[14px] font-extrabold leading-[21px] font-roboto text-[rgba(0,0,0,0.5)]'>
            Socials
          </h3>
          <div className='flex flex-col gap-4 text-[12px] font-normal'>
            {socials}
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
