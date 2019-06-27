import Link from "next/link";

export default () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      ul {
        display: flex;
      }
      ul li {
        margin-right: 20px;
      }
      header {
        background-color: peru;
        color: white;
      }
    `}</style>
  </header>
);
