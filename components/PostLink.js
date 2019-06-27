import Link from "next/link";

const PostLink = props => (
  <div>
    <Link href={`/post?title=${props.title}`} as={`/post/${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </div>
);

export default PostLink;
