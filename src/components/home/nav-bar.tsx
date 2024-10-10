'use client';
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { API_URL } from '@/utils/env.config';

export interface Props extends React.HTMLAttributes<HTMLDivElement>{
  user: {
    id: number;
    email: string;
    joinedAt: Date;
  } | null;
}

const NavBar = ({className, user, ...rest}: Props) => {
  const onDiscordLogin = () => {
    window.location.href = `${API_URL}/api/auth/login`;
  }
  return (
      <nav className={`flex flex-row py-8 justify-between ${className}`}{...rest}>
        <Image
          src="iso_logo.svg"
          alt="Ctrl+Review Logo"
          width={150}
          height={30}
          priority
        />
        <div className="flex flex-row items-center gap-8">
          {user ? (
            <Link href="/profile">
              <button className="py-2 px-4 rounded-md">Profile</button>
            </Link>
          ) : (
            <button onClick={onDiscordLogin}>Log in with Discord</button>
          )}
        </div>
      </nav>
  );
};


export default NavBar;
