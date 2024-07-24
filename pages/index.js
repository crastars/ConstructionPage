import Head from "next/head";
import ChromeDino from "@/components/ChromeDino"; // Adjust the path as needed
import { Construction } from "@/components/underconstruction/Construction"; // Uncomment if you want to use this

export default function Home() {
  return (
    <>
      <Head>
        <title>Carina | Pookie</title>
        <meta name="description" content="Your next best hire" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Construction />
      
    </>
  );
}
