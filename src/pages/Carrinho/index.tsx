import { Header } from "../../components/header"

function Carrinho() {
  
    return (
      <div>
        <Header />
        <div className=" flex justify-center mt-[50px] gap-[200px]">
          <div className="font-serif">
            <h1 className="text-6xl">Carrinho</h1>
            <p className="text-2xl">Ainda não terminou de escolher? Volte para o Shopping</p>
            <div className="mt-[30px] flex gap-5">
              <div className="w-[129px] h-[133px] bg-gray-500"></div>
              <div className="space-y-2 text-2xl">
                <strong className="">
                  Product 1
                </strong>
                <p>Quantidade:X</p>
                <p>Valor:R$:29,90</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 mt-[120px] font-serif">
            <h1 className="text-3xl">Resumo da compra</h1>
            <p className="text-xl">Subtotal - R$: 29,90</p>
            <hr className="border-4 border-black-400 cursor-pointer hover:border-green-500 duration-500" />
            <p className="text-xl">Total - R$: 29,90</p>
            <button className="w-[100%] bg-transparent hover:bg-green-500 text-black-400 font-semibold hover:text-white py-2 px-4 border border-black-400 hover:border-transparent rounded">
 CONCLUIR COMPRA
</button>
          </div>
        </div>
      </div>
    )
  }
        
  
  
  
  export default Carrinho