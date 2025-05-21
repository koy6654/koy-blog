'use client';

import '@styles/layout.css';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@components/ui/dropdown-menu';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { DARK_THEME, LIGHT_THEME, NAVBAR_ICON_SIZE } from '@/utils/constants';
import { useState } from 'react';
import { useTheme } from 'next-themes';

type Theme = typeof DARK_THEME | typeof LIGHT_THEME;

interface ThemeIconProps {
  theme: Theme;
}

interface DropdownMenuItemIconProps {
  theme: Theme;
  onClick: () => void;
}

function ThemeIcon({ theme }: ThemeIconProps) {
  switch (theme) {
    case DARK_THEME:
      return <MdOutlineDarkMode className="my-2" size={NAVBAR_ICON_SIZE} />;
    case LIGHT_THEME:
      return <MdOutlineLightMode className="my-2" size={NAVBAR_ICON_SIZE} />;
    default:
      throw new Error('5587d933-4b91-58b1-b4f4-686aa4367c28');
  }
}

function DropdownMenuItemIcon({ theme, onClick }: DropdownMenuItemIconProps) {
  return (
    <DropdownMenuItem className="flex flex-col justify-center items-center" onClick={onClick}>
      <ThemeIcon theme={theme} />
    </DropdownMenuItem>
  );
}

export function NavBar() {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(DARK_THEME);
  const { setTheme } = useTheme();

  const handleDropdownMenuItemIconOnClick = (theme: Theme) => {
    setTheme(theme);
    setSelectedTheme(theme);
  };

  return (
    <nav className="navbar-footer px-8 md:px-28 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="md:text-2xl text-base font-bold font-sans">DevKoy</h1>
      </div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <ThemeIcon theme={selectedTheme} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Themes</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItemIcon theme={DARK_THEME} onClick={() => handleDropdownMenuItemIconOnClick(DARK_THEME)} />
            <DropdownMenuItemIcon theme={LIGHT_THEME} onClick={() => handleDropdownMenuItemIconOnClick(LIGHT_THEME)} />
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="https://github.com/koy6654" target="_blank">
          <FaGithub size={NAVBAR_ICON_SIZE} />
        </Link>
      </div>
    </nav>
  );
}
