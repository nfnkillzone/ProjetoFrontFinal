
export function Header() {
    return(
        <header className="bg-indigo-950">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-10 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
            </a>
          </div>
          <div className="flex gap-10">
          <a href="#" className="text-lg font-semibold leading-6 text-white">Home </a>
          <a href="#" className="text-lg font-semibold leading-6  text-white">Carrinho </a>
          <a href="#" className="text-lg font-semibold leading-6  text-white">Produtos </a> 
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-lg font-semibold leading-6  text-white">Log in <span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>
        
      </header>
         
    )
}