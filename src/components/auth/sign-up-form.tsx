'use client';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"

const signUpSchema = zod
  .object({
    username: zod.string().min(8),
    email: zod.string().email(),
    password: zod.string(),
  })
  .required()

import React from 'react'

type Props = {}

const SignUpForm = (props: Props) => {
  return (
    <div>SignUpForm</div>
  )
};

export default SignUpForm;
