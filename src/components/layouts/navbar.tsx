'use client';

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@components/ui/dropdown-menu';
import { MdOutlineLightMode, MdOutlineDarkMode, MdMonitor } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { DARK_THEME, LIGHT_THEME, SYSTEM_THEME, NAVBAR_ICON_SIZE } from '@/utils/constants';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Skeleton from '@components/ui/skeleton';

function ThemeIcon({ theme }: { theme: string | undefined }) {
  switch (theme) {
    case DARK_THEME:
      return <MdOutlineDarkMode size={NAVBAR_ICON_SIZE} />;
    case LIGHT_THEME:
      return <MdOutlineLightMode size={NAVBAR_ICON_SIZE} />;
    case SYSTEM_THEME:
      return <MdMonitor size={NAVBAR_ICON_SIZE} />;
    default:
      return null;
  }
}

function DropdownMenuItemActivated({
  currentTheme,
  targetTheme,
}: {
  currentTheme: string | undefined;
  targetTheme: string;
}) {
  return (
    <div className="flex items-center">
      <span className="capitalize inline-block w-16 text-left font-medium">{targetTheme}</span>
      {currentTheme === targetTheme && <span className="text-xs text-violet-500">Active</span>}
    </div>
  );
}

export function NavBar() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="navbar-footer px-8 md:px-28 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="md:text-2xl text-base font-bold font-sans">
          <Link href="/">DevKoy</Link>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        {mounted ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <ThemeIcon theme={resolvedTheme} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Themes</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={() => setTheme(LIGHT_THEME)} className="justify-between cursor-pointer">
                  <DropdownMenuItemActivated currentTheme={theme} targetTheme={LIGHT_THEME} />
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme(DARK_THEME)} className="justify-between cursor-pointer">
                  <DropdownMenuItemActivated currentTheme={theme} targetTheme={DARK_THEME} />
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme(SYSTEM_THEME)} className="justify-between cursor-pointer">
                  <DropdownMenuItemActivated currentTheme={theme} targetTheme={SYSTEM_THEME} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="https://github.com/koy6654" target="_blank">
              <FaGithub size={NAVBAR_ICON_SIZE} />
            </Link>
          </>
        ) : (
          <>
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-6 w-6" />
          </>
        )}
      </div>
    </nav>
  );
}
