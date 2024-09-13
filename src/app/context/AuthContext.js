'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import Swal from 'sweetalert2'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    })

    // Función para revisar si hay un usuario en la sesión
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUser = sessionStorage.getItem('user');
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                if (parsedUser?.logged) {
                    setUser(parsedUser);
                }
            }
        }
    }, []);


    // Funcion para registrar un usuario
    const registerUser = async (values) => {

        try {

            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const user = userCredential.user;

            setUser({
                logged: true,
                email: user.email,
                uid: user.uid
            });

            sessionStorage.setItem('user', JSON.stringify({
                logged: true,
                email: user.email,
                uid: user.uid
            }));

            Swal.fire({
                icon: "success",
                title: "Usuario registrado!",
                text: "El usuario fue agregado a la BD",
                toast: true,
                position: "top-end",
                timer: 3000,
                showConfirmButton: false,
                timerProgressBar: true,
            });

        } catch (error) {

            console.error('Error registering user: ', error);

            if (error.code === 'auth/email-already-in-use') {
                Swal.fire({
                    icon: "warning",
                    title: `Ya existe el usuario ${values.email}`,
                    text: "Inicie sesión",
                    confirmButtonText: "OK"
                });
            } else if (error.code === 'auth/weak-password') {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "La contraseña debe tener al menos 6 caracteres.",
                    confirmButtonText: "OK"
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Hubo un problema al iniciar sesión. Por favor, intente nuevamente.",
                    confirmButtonText: "OK"
                });
            }
        }
    }


    // Funcion para iniciar sesion
    const loginUser = async (values) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
            const user = userCredential.user;

            sessionStorage.setItem('user', JSON.stringify({
                logged: true,
                email: user.email,
                uid: user.uid
            }));

            setUser({
                logged: true,
                email: user.email,
                uid: user.uid
            });

            Swal.fire({
                icon: "info",
                title: `Bienvenido ${user.email}`,
                toast: true,
                position: "top-end",
                timer: 3000,
                showConfirmButton: false,
                timerProgressBar: true,
            });
        } catch (error) {
            console.error('Error logging in: ', error);
            if (error.code === 'auth/invalid-credential') {
                Swal.fire({
                    icon: "error",
                    title: "Error de inicio de sesión",
                    text: "No existe usuario o la contraseña no es correcta",
                    confirmButtonText: "OK"
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Hubo un problema al iniciar sesión. Por favor, intente nuevamente.",
                    confirmButtonText: "OK"
                });
            }
        }
    }


    // Funcion para cerrar la sesion
    const logoutUser = () => {
        Swal.fire({
            icon: "question",
            title: `"Desea cerrar la sesión ?`,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cerrar",
            timer: 3000,
            timerProgressBar: true,
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.removeItem('user')
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                })
                Swal.fire({
                    icon: "info",
                    title: `"Sesión cerrada`,
                    position: "top-end",
                    toast: true,
                    timer: 3000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                });
            }
        });
    }

    return (
        <AuthContext.Provider
            value={({ user, registerUser, loginUser, logoutUser })}
        >
            {children}
        </AuthContext.Provider>
    )
}
