import SignUpForm from '@/components/auth/sign-up-form';
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <main className="flex min-h-screen flex-col px-16 gap-24 pb-10">
      <SignUpForm />
    </main>
  )
}

export default Page;
