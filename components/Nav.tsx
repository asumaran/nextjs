import Link from "next/link";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link href="/page/[slug]" as="/page/home">
          Home
        </Link>
      </li>
      <li>
        <Link href="/page/[slug]" as="/page/about">
          About
        </Link>
      </li>
      <li>
        <Link href="/login" as="/login">
          Login
        </Link>
      </li>
      <li>
        <Link href="/one" as="/one">
          One
        </Link>
      </li>
      <li>
        <Link href="/two" as="/two">
          Two
        </Link>
      </li>
      <li>
        <input />
      </li>
    </ul>
  );
}
