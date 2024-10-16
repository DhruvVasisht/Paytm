import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'

function Register() {
  return (
    <div>
    <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Heading label={"Signup "} />
      <SubHeading label={"Enter your infromation to create an account"} />
      <InputBox label="First Name" placeholder={"John"} />
      <InputBox label="Last Name" placeholder={"Doe"} />
      <InputBox label="Email" placeholder={"john@gmail.com"} />
      <InputBox label="Password" placeholder={"12345"} />
      <Button label={"Sign Up"} />
      <BottomWarning label={"Already Have An Account?"} buttonText={"Sigin"} to={"/signin"} />
      </div>
    </div>
    </div>
    </div>
  )
}

export default Register