import Image from 'next/image';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600']
});

const Logo = () => {
  return (
    <div className='hidden md:flex items-center gap-x-2'>
      <Image
        src="/logo.png"
        height={40}
        width={200}
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.png"
        height={40}
        width={200}
        alt="Logo"
        className="hidden dark:block"
      />
    </div>
  );
};

export default Logo;
