// "use client";
// import { useState } from "react";
// import { IoPersonOutline, IoPerson } from "react-icons/io5";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { FcGoogle } from "react-icons/fc";
// // import { useAuthContext } from "@/app/context/AuthContext";

import Image from "next/image";
import ButtonBack from "../shared/buttonBack";

// const LoginForm = () => {
//   // const { registerUser, loginUser, googleLogin } = useAuthContext();

//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });

//   // const handleChange = (e) => {
//   //   setValues({ ...values, [e.target.name]: e.target.value });
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   // };

//   return (
//     <div className="fixed inset-0 z-10 flex justify-center items-center backdrop-blur-xl px-3">
//       <form
//         // onSubmit={handleSubmit}
//         className="bg-blue-900 py-4 px-6 rounded-xl max-w-md w-full space-y-4"
//       >
//         <div className="flex justify-center items-center ">
//           <IoPersonOutline className="text-9xl text-white border-2 rounded-full border-white p-4" />
//         </div>

//         <div className="flex space-x-2 items-center">
//           <IoPerson className="text-3xl text-white" />
//           <input
//             type="email"
//             value={values.email}
//             required
//             placeholder="Email"
//             className="p-2 rounded-e-lg w-full block"
//             name="email"
//             // onChange={handleChange}
//           />
//         </div>

//         <div className="flex space-x-2 items-center">
//           <RiLockPasswordFill className="text-3xl text-white" />
//           <input
//             type="password"
//             value={values.password}
//             required
//             placeholder="Password"
//             className="p-2 rounded-e-lg w-full block"
//             name="password"
//             // onChange={handleChange}
//           />
//         </div>

//         <div className="flex flex-col space-y-3">
//           <div className="flex justify-between">
//             <button
//               className="bg-white py-3 px-6 sm:px-10 text-blue-900 rounded-full"
//               // onClick={() => loginUser(values)}
//             >
//               Login
//             </button>
//             <button
//               className="flex items-center bg-white py-3 px-6 text-blue-900 rounded-full"
//               // onClick={() => googleLogin()}
//             >
//               <FcGoogle className="text-3xl" />
//               Login with Google
//             </button>
//           </div>
//           <button
//             className="bg-white py-3 px-6  text-blue-900 rounded-full"
//             // onClick={() => registerUser(values)}
//           >
//             Register
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;


//******************************************************************* */
//******************************************************************* */




export default function Example() {
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
          <form action="#" className="space-y-6">
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
              <div className="mt-2">
                <input
                  placeholder="*******"
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#1a56db] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1e429f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar sesión
              </button>
              <ButtonBack btnLogin={true}/>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No tiene cuenta?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Registrarse
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
