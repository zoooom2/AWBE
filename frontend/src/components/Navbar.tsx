import { Link } from 'react-router-dom';
import { logo } from '../assets';

const Navbar = () => {
  return (
    <nav className='bg-awobe-black w-full flex justify-center py-1'>
      <Link to='/' className='w-[79px] h-[65px] '>
        <img src={logo} />
      </Link>
    </nav>
  );
};

export default Navbar;
