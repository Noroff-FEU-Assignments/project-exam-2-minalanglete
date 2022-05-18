import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/hotels">
          <a>Hotels</a>
        </Link>
        <Link href="/enquiry">
          <a>Enquiry to a hotel</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/login">
          <a>Admin</a>
        </Link>
      </nav>

      <div className="container">{children}</div>
    </>
  );
}
