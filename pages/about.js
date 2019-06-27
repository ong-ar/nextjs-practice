import Head from "next/head";
import withLayout from "../lib/withLayout";

const About = () => (
  <div>
    <Head>
      <title>about</title>
    </Head>
    <h2>About page</h2>
  </div>
);
export default withLayout(About);
