import logo from '../assets/LogoAmarela.png'
import { ShoppingCart } from "@phosphor-icons/react";

export function Header() {
    return(
        <header className="bg-black-400">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-10 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-14 w-auto" src={logo} alt="Logo Site"/>
            </a>
          </div>
          <div className=" font-serif flex gap-10">
          <a href="/" className="text-lg font-semibold leading-6 text-white">Home </a>
          <a href="/carrinho" className="text-lg font-semibold leading-6  text-white">Carrinho </a>
          <a href="/" className="text-lg font-semibold leading-6  text-white">Produtos </a> 
          </div>
          
          <div className=" font-serif hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-lg font-semibold leading-6  text-white">Entrar <span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>
        
      </header>
         
    )
}