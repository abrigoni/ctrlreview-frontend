'use client';
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

type Props = {};

const NavBar = (props: Props) => {
  return (
      <nav className="flex flex-row py-8 justify-between">
        <Image
          src="iso_logo.svg"
          alt="Ctrl+Review Logo"
          width={150}
          height={30}
          priority
        />
        <div className="flex flex-row items-center gap-8">
          <Link href="/sign-in">
            <button>Sign in</button>
          </Link>
          <Link href="/sign-up">
            <button className="bg-pink-700 py-2 px-4 rounded-md">Create account</button>
          </Link>
        </div>
      </nav>
  );
};

export default NavBar;