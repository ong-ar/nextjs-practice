import Link from "next/link";
import Head from "next/head";
import withLayout from "../lib/withLayout";

const Index = () => (
  <div>
    <Head>
      <title>index</title>
    </Head>
    <h1>hello world!!</h1>
    <Link href={"/about"}>
      <a>about</a>
    </Link>
  </div>
);

export default withLayout(Index);
