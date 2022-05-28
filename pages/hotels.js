import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import Heading from "../components/layout/Heading";
import axios from "axios";
import { BASE_URL } from "../components/constants/api";

export default function Home(props) {
  console.log(props);

  return (
    <Layout>
      <Head />

      <Heading title="Hotels" />
      <div className="containerhotels">
        {props.hotels.map((hotel) => {
          const address = hotel.short_description;
          return (
            <a key={hotel.id} href={`hotel/${hotel.id}`}>
              <div className="containercard">
                <div className="cardleft">
                  <img
                    src={hotel.images[0].src}
                    alt={hotel.images[0].alt}
                    className="hotelimagecard"
                  />
                </div>
                <div className="cardcenter">
                  <h2>{hotel.name}</h2>

                  <p>{address.replace(/(<([^>]+)>)/gi, "")}</p>
                  <p className="nrbeds">number of beds 2</p>
                  <p>wifi at the hotel: yes</p>
                  <p>Parking at the hotel: yes</p>
                  <p>Breakfast included: yes</p>
                </div>
                <div className="cardright">
                  <p className="price">{hotel.prices.price} NOK</p>
                  <p>pr night</p>

                  <p className="viewmore">View more</p>
                </div>
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
    hotels = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      hotels: hotels,
    },
  };
}
