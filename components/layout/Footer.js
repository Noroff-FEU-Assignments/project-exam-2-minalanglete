import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerleft">
          <h4>How to reach us</h4>
          <p>
            Holidaze AS Bryggegata 12 3000 Bergen Norway Email: contact@holidaze.no Phone: 900 00
            000
          </p>
        </div>
        <div className="footercenter">
          <h4>Menu</h4>
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
        </div>
        <div className="footerright">
          <h4>Admin</h4>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
      </div>
    </>
  );
}
