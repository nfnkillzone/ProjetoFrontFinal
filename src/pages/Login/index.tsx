import { Link, useNavigate} from 'react-router-dom';
import LogoPng from '../../assets/black_logo.png';
import { useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema, AdminLoginFormSchema } from './schema';
import * as z from "zod";
import { AuthContextData } from '../../Context/Auth';
import { IUserInfo } from '../../Context/Auth';
import {  useContext, useEffect, useState  } from 'react'

type TLoginFormInputs = z.infer<typeof loginFormSchema>

export default function Login() {

  const navigate = useNavigate();

  const { register,
     handleSubmit, 
     formState: { isSubmitting, errors, isValid }} = useForm<TLoginFormInputs>({
    resolver: zodResolver(loginFormSchema)
  });

  const submitLogin = (data: TLoginFormInputs) => {
    if (isValid) {
      localStorage.setItem('@userInfo', JSON.stringify({ emailUser: data.email}))
      navigate('/')
    }
    
  }

    return (
      <div className="bg-black-400 h-screen flex justify-center items-center">
        <div className="w-[456px] bg-white rounded-lg flex flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img 
              className="mx-auto h-10 w-auto" 
              src={LogoPng} 
              alt="Logo Deep Music" 
            />
            <h2 
              className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
            >
              Bem-vindo de volta!
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit(submitLogin)} className="space-y-6" action="#" method="POST">
              <div>
                <label 
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  E-mail
                </label>
                <div className="mt-2">
                  <input 
                    type="text"
                    {...register('email')}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && <p>{errors.email?.message}</p>}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label 
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Senha
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Esqueceu a senha?</a>
                  </div>
                </div>
                <div className="mt-2">
                  <input 
                  type="password"
                  {...register('password')}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                   {errors.password && <p>{errors.password?.message}</p>}
                </div>
              </div>

              <div>
                <button 
                  type="submit" disabled={isSubmitting} 
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Entrar
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Não tem uma conta?
              <Link 
                to="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Registre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
}
  