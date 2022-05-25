import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import Heading from "../components/layout/Heading";
import axios from "axios";
import { BASE_URL } from "../components/constants/api";
import Navbar from "../components/layout/NavBar";

export default function Home(props) {
  console.log(props);

  return (
    <Layout>
      <Head />

      <div className="header">
        <div className="containersearch">
          <div className="slogan">
            <Heading title="Holidaze" />
            <p className="slogantitle">- your local tourism agency</p>
          </div>
          <p className="slogantext">
            This is the place to find hotels, B&Bs and guesthouses in Bergen city. Make a search and
            find you next stay.
          </p>
          <input
            type="text"
            placeholder="Search for places in Bergen"
            className="searchbar"
          ></input>
        </div>
        <img src="/header.jpg" alt="heder image of Floyen i Bergen " />
      </div>

      <p className="populartitle">Popular places to stay in Bergen</p>
      <div className="containerpopular">
        {props.hotels.map((hotel) => {
          return (
            <a key={hotel.id} href={`hotel/${hotel.id}`}>
              <div className="popularhotel">
                <img src="/hotel.jpg" alt="hotels" className="indexhotelimg" />
                <h2>{hotel.attributes.name}</h2>
                <hr />
                <p>{hotel.attributes.address}</p>
                <p className="price">{hotel.attributes.price} pr night</p>
              </div>
            </a>
          );
        })}
      </div>
      <Footer />
    </Layout>
  );
}
export async function getStaticProps() {
  let hotels = [];

  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
    hotels = response.data.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      hotels: hotels,
    },
  };
}

export function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
