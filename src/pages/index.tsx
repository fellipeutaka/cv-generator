import Head from "next/head";
import Form from "../components/Form";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Generate your CV</title>
      </Head>
      <h1>Home</h1>
      <Form />
    </main>
  );
}
