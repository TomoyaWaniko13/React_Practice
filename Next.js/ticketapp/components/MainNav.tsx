import Link from 'next/link';
import ToggleMode from '@/components/ToggleMode';

const MainNav = () => {
  return (
    <div className={'flex justify-between'}>
      <div className={'flex items-center gap-2'}>
        <Link href={'/'}>dashboard</Link>
        <Link href={'/tickets'}>tickets</Link>
        <Link href={'/users'}>users</Link>
      </div>
      <div className={'flex items-center gap-2'}>
        <Link href={'/'}>logout</Link>
        <ToggleMode />
      </div>
    </div>
  );
};

export default MainNav;
