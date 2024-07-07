'use server';
import UserService from "@/services/user.service";
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers'


export async function handleLogin(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const username = formData.get('username')?.toString();
    const password = formData.get('password')?.toString();
    if (username === undefined || password === undefined) throw Error('invalid fields');
    const body = {
      username,
      password,
    }
    const user = await UserService.signIn(body);
    if (user) {
      cookies().set('session', user.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/'
      });
      redirect('/');
    }
  } catch (error) {
      console.error(error);
  }
}