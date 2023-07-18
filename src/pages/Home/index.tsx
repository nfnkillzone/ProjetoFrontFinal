import Card from "../../components/Card"
import { Header } from "../../components/header"
import { products } from "../../utils/data/products"

function Home() {
  
  return (
    <>
    <Header />
    
    <div className="flex flex-wrap gap-2 w-[50%] ml-[40%] mt-[5%]">
      {products.map ((produto) =>(
          <Card 
            key={produto.name}
            name={produto.name} 
            preco={produto.price}
            idProduct={produto.categoryId}
          />
      ))}
    </div>
    </>
  
    
  )
}
      



export default Home