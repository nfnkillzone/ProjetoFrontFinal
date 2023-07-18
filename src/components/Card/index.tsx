type props = {
  name: string;
  preco: number;
};
export default function Card({ name, preco }: props) {
  return (
    <div className="">
      <div className="w-[265px] h-[331px] bg-gray-500"></div>
      <div className="flex gap-2">
        <strong className="">{name}</strong>
        <span>{preco}</span>
      </div>
    </div>
  );
}
