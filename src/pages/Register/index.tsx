import { Link } from 'react-router-dom';
import LogoPng from '../../assets/black_logo.png';

export default function Register() {
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
              Bem-vindo!
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label 
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  E-mail
                </label>
                <div className="mt-2">
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    autoComplete="email" 
                    required 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label 
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Senha
                  </label>
                </div>
                <div className="mt-2">
                  <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    autoComplete="current-password" 
                    required 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button 
                  type="submit" 
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Registrar
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Já tem uma conta?
              <Link 
                to="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Faça Login
              </Link>
            </p>
          </div>
        </div>
      </div>
  )
}
  