import { SignUp } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=' flex w-full min-h-screen items-center justify-center'>
        <SignUp />
    </div>
  )
}

export default page