import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function QuizzesMainPage() {
  return (
    <>
      <Head>
        <title>Quizzes | Cantinho da Leitura</title>
      </Head>
      <Image
        src="/images/random.png"
        alt="Pilha de livros"
        width={350}
        height={500}
      />
      <h1>Muitos testes para você!</h1>
      <h2>
        <Link href="/">
          <a>Voltar para home</a>
        </Link>
      </h2>
    </>
  );
}
