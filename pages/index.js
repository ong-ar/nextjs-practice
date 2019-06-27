import Head from "next/head";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";

const Index = () => (
  <div>
    <Head>
      <title>index</title>
    </Head>
    <h1>Posts:</h1>
    <PostLink title="post 1" />
    <br />
    <PostLink title="post 2" />
  </div>
);

export default Index;
