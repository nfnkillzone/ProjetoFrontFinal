import Card from "../../components/Card"
import { Header } from "../../components/header"
import produtos from "../../data/produtos.json"

function Home() {
  
  return (
    <>
    <Header />
    
    <div className="flex flex-wrap gap-2 w-[50%] ml-[40%] mt-[5%]">
    {produtos.map (produto =>(
   <Card name={produto.nome} preco={produto.preco}/>
    ))}
    </div>
    </>
  
    
  )
}
      



export default Home