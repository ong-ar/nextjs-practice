import Head from "next/head";
import PostLink from "../components/PostLink";
import Axios from "axios";

export default class extends React.Component {
  static async getInitialProps() {
    const {
      data: {
        data: { movies: posts }
      }
    } = await Axios.get("https://yts.am/api/v2/list_movies.json");
    return {
      posts
    };
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        <Head>
          <title>index</title>
        </Head>
        <h1>Posts:</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <PostLink title={post.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
