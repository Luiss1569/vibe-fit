import { Link } from "@components/Button";
import cmgCarrossel from "@img/carrossel.png";
import Image from "next/image";

export default function Carrossel() {
  return (
    <section className="flex flex-col justify-center md:items-center relative md:flex-row py-0">
      <div className="flex flex-col justify-around md:items-start items-end h-80">
        <h1 className="font-mono text-4xl md:text-5xl">
          Comida <strong className="text-primary">saudável</strong> também pode
          ter <strong className="text-secondary">sabor</strong>.
        </h1>
        <p className="text-lg md:text-xl">
          Transforme seu corpo e sua vida com os sabores irresistíveis dos
          nossos pratos.
        </p>
        <Link href={"/product"} variant="secondary">
          Veja o cardápio
        </Link>
      </div>
      <div className="flex justify-center w-full mt-5 md:mt-0 md:w-2/3 m-auto md:justify-end">
        <Image src={cmgCarrossel} alt="carrossel" />
      </div>
    </section>
  );
}
