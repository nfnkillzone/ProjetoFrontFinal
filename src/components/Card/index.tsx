import { Link } from "react-router-dom";

type props = {
  name: string;
  preco: number;
  idProduct: number;
};
export default function Card({ name, preco, idProduct}: props) {

  return (
    <Link to={`/product/${idProduct}`} >
      <div className="w-[265px] h-[331px] bg-gray-500"></div>
      <div className="flex gap-2">
        <strong className="">{name}</strong>
        <span>{preco}</span>
      </div>
    </Link>
  );
}
