import { Header } from "../../components/header";

export default function Product() {
  return (
    <div>
    <Header />
    <div className=" px-[110px] flex justify-center gap-10 mt-[5%]">
      <div className="w-[554px] h-[553px] bg-gray-500 "></div>
      <div className="font-serif flex-1 ">
        <strong className=" text-7xl">Product 1</strong>
        <div className="w-[400px] flex flex-col gap-5 h-full">
        <p className="text-lg italic">R$:29,90</p>
        <p className="text-lg">Lorem ipsum dolor
           sit amet consectetur 
           adipisicing elit. Odit 
           qui totam esse laudantium 
           incidunt eum blanditiis
            natus amet minus alias?
        </p>
        <button className="mt-[40px] bg-transparent hover:bg-black-400 text-black-400 font-semibold hover:text-white py-2 px-4 border border-black-400 hover:border-transparent rounded">
  Adicionar ao Carrinho
</button>
        </div>
      </div>
    </div>
   </div>
    
  )
}
  