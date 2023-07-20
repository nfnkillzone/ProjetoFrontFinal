import Card from "../../components/Card"
import { Header } from "../../components/header"
import { products } from "../../utils/data/products"

function Home() {
  
  return (
    <>
    <Header />
    
    <div className=" max-w-screen-2xl flex justify-center flex-wrap gap-2 mt-[20px]">
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