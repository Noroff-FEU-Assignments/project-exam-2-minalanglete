import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footercontainer">
          <div className="footerleft">
            <h4>How to reach us</h4>
            <hr />
            <p>Holidaze AS</p>
            <p>Bryggegata 12</p>
            <p>3000 Bergen</p>
            <p>Norway</p>
          </div>
          <div className="footercenter">
            <h4>Menu</h4>
            <hr />
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
            <hr />
            <Link href="/login">
              <a>Login</a>
            </Link>
          </div>
        </div>
        <p className="copyright">© 2022 Mina Langlete, Holidaze Exam2</p>
      </div>
    </>
  );
}
