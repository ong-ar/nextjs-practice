import Link from "next/link";
import Head from "next/head";

export default () => (
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
