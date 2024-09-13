'use client'
import Image from "next/image";
import ButtonBack from "../shared/buttonBack";
import { useState } from "react";
import { useAuthContext } from "@/app/context/AuthContext";
import { IoEye, IoEyeOff } from "react-icons/io5";

const LoginForm = () => {

  const { registerUser, loginUser } = useAuthContext()
  const [values, setValues] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  //Estado y funcion para mostrar u ocultar la contraseña
  const [inputType, setInputType] = useState("password");

  const togglePasswordVisible = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            alt="Logo Kivara Admin"
            src="/logo_admin.svg"
            className="mx-auto h-20 w-auto"
            width={16}
            height={16}
            priority="false"
          >
          </Image>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Ingresa a tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" className="space-y-6" onClick={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  placeholder="example@email.com"
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={values.name}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Olvidó su contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                  placeholder="*******"
                  id="password"
                  name="password"
                  type={inputType}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={values.password}
                />
                <button className="ioEye" type="button" onClick={togglePasswordVisible}>
                  {inputType === "password" ? <IoEye /> : <IoEyeOff />}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => { loginUser(values) }}
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#1a56db] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1e429f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Iniciar sesión
              </button>
              <ButtonBack btnLogin={true} />
            </div>
            <p className="mt-10  text-center text-sm text-gray-500">
              No tiene cuenta?{' '}
            </p>
            <button
              onClick={() => { registerUser(values) }}
              className="mt-0 flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm hover:text-white font-semibold leading-6 text-[#1a56db] shadow-sm hover:bg-[#1e429f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-[#1a56db] border-2 hover:border-[#1e429f] ">
              Registrarse
            </button>
          </form>

        </div>
      </div>
    </>
  )
}

export default LoginForm


