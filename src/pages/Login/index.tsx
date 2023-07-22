import { Link, useNavigate} from 'react-router-dom';
import LogoPng from '../../assets/black_logo.png';
import { useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema, AdminLoginFormSchema } from './schema';
import * as z from "zod";
import { AuthContext } from '../../Context/Auth'
import {  useContext, useEffect, useState  } from 'react'
import { loginNewUser,loginAdmin } from '../../services/login.service'

interface AuthContextData {
  authenticated: boolean;
  user: IUserInfo | null;
  token: string | null;
  setToken: (token: string | null) => void;
  userLogin: (email: string, password: string) => void;
  userLogout: () => void;
  userAdmin: () =>  boolean;
}

type  IUserInfo = {
  email: string,
  password: string,
  isAdmin: boolean,
} 


type TLoginFormInputs = z.infer<typeof loginFormSchema> & { isAdmin?: boolean };

export default function Login() {

  
  const { register,
     handleSubmit, 
     formState: { isSubmitting, errors, }} = useForm<TLoginFormInputs>({
      defaultValues: { isAdmin: true },
    resolver: zodResolver(loginFormSchema)
  });

  const { userLogin, userAdmin, setToken } = useContext<AuthContextData>(AuthContext)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [ setResponse ] = useState<any>(null);
    const isAdmin =userAdmin()
    const navigate = useNavigate()

    useEffect(() => {
      if (isAdmin) {
        navigate('/')
      }
    },[isAdmin, navigate])

  const submitLogin =  (data: TLoginFormInputs) => {
    const adminFormValidation = AdminLoginFormSchema.safeParse(data)
    if (!adminFormValidation.success) {
      console.error ('Dados inválidos', adminFormValidation.error)
      return
    } 
  
  if (adminFormValidation.data.isAdmin) {
    loginAdmin(data.email, data.password)
      .then((response) => {
        console.log('Resposta da API de administradores:', response.data);
        console.log(response.data)
        const token = response.data.token
        if (token) {
          userLogin(data.email, data.password)
          setToken(token)
          localStorage.setItem('@userInfo', JSON.stringify({ emailUser: data.email, token }));
           navigate('/');
    }
      })
      .catch((error) => {
        console.error('Erro na chamada da API de Administradores:', error)
      })
  }

  loginNewUser(data.email, data.password)
  .then((response) => {
    const token = response.data.token
    if (token) {
    userLogin(data.email, data.password)
    setToken(token)  
      localStorage.setItem('@userInfo', JSON.stringify({ emailUser: data.email, token }))
       navigate('/')
}

setResponse(response)

})
.catch((error) => {

if (error.response) {
  if (error.response.status === 404) {
    console.error('Usuário não encontrado')
  }
}
});

console.log('Dados enviados para a API de Usuarios', data)


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
  