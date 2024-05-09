'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

const ToggleMode = () => {
  // get the current theme and a function to set the theme.
  const { theme, setTheme } = useTheme();
  // A state variable mounted is initialized with a default value of false.
  // This variable is used to track if the component has mounted.
  const [mounted, setMounted] = useState(false);

  // The useEffect hook is used to set mounted to true when the component mounts.
  // This is done to prevent the theme from being switched before the component is fully mounted.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant={'outline'} size={'icon'} disabled={'true'}></Button>;
  }

  const currentlyDark = theme === 'dark';

  return (
    <Button variant={'outline'} size={'icon'} onClick={() => setTheme(`${currentlyDark ? 'light' : 'dark'}`)}>
      {currentlyDark ? (
        <Sun className={'hover:cursor-pointer hover:text-primary'} />
      ) : (
        <Moon className={'hover:cursor-pointer hover:text-primary'} />
      )}
    </Button>
  );
};

export default ToggleMode;
