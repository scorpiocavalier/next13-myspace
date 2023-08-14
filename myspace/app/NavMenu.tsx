import Link from 'next/link';
import Image from 'next/image';
import { SignInButton } from '@/components/buttons';

export default function NavMenu() {
  return (
    <nav className='flex justify-between items-center px-10 bg-[#1d4ed8] text-white h-[70px]'>
      <Link href='/'>
        <Image src={'/next.svg'} width={200} height={40} alt='Next Logo' />
      </Link>

      <ul className='flex gap-4'>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'/users'}>Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
}
