import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'

function Login() {
  return (
    <div>
    <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Heading label={"Login "} />
      <SubHeading label={"Enter your credentials to access your account"} />
      <InputBox label="Email" placeholder={"john@gmail.com"} />
      <InputBox label="Password" placeholder={"12345"} />
      <Button label={"Login"} />
      <BottomWarning label={"Dont Have An Account?"} buttonText={"Register"} to={"/signup"} />
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login