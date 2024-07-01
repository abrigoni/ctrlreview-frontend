'use client';
import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import UserService from '@/services/user.service';

const signUpSchema = zod
  .object({
    username: zod.string().min(8),
    email: zod.string().email(),
    password: zod.string(),
  })
  .required();

export type SignUpSchema = zod.infer<typeof signUpSchema>;


const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const onSubmit = (data: SignUpSchema) => {
    UserService.createAccount(data);
  }

  return (
    <form className="space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6">Email address</label>
        <div className="mt-2">
          <input
            {...register("email")}
            id="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full bg-[#151515] ring-gray-400 rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label htmlFor="username" className="block text-sm font-medium leading-6">Username</label>
        <div className="mt-2">
          <input
            {...register("username")}
            id="username"
            type="username"
            required
            className="block w-full bg-[#151515] ring-gray-400 rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
      <div className="flex items-center justify-between">
        <label htmlFor="password" className="block text-sm font-medium leading-6">Password</label>
        </div>
        <div className="mt-2">
          <input
            {...register("password")}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required className="block w-full bg-[#151515] ring-gray-400 rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Create account</button>
      </div>
    </form>
  )
};

export default SignUpForm;
