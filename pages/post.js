import Head from "next/head";
import { withRouter } from "next/router";

const Post = props => (
  <div>
    <Head>
      <title>{props.router.query.title}</title>
    </Head>
    <h1>{props.router.query.title}</h1>
    <p>post info</p>
  </div>
);
export default withRouter(Post);
