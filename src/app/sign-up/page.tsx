import SignUpForm from '@/components/auth/sign-up-form';
import NavBar from '@/components/home/nav-bar';
import React from 'react'
import Image from 'next/image';

type Props = {}

const Page = (props: Props) => {
  return (
    <main className="flex min-h-screen flex-col px-16 gap-24 pb-10">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <Image
            src="iso_logo.svg"
            alt="Ctrl+Review Logo"
            width={150}
            height={30}
            priority
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Create your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <SignUpForm />

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?
            <a href="#" className="font-semibold leading-6 text-pink-600 hover:text-pink-500"> Sign in!</a>
          </p>
        </div>
      </div>
    </main>
  )
}

export default Page;
