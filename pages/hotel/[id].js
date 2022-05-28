import Heading from "../../components/layout/Heading";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { BASE_URL_ID } from "../../components/constants/apiId";
import { BASE_URL } from "../../components/constants/api";

import Footer from "../../components/layout/Footer";
import Link from "next/link";

export default function Hotel({ hotel }) {
  const address = hotel.short_description;
  const description = hotel.description;

  return (
    <Layout>
      <div className="containerdetailhotel">
        <Heading title={hotel.name} />
        <hr />
        <div>
          <div className="containerinfo">
            <div className="containeradress">
              <p className="address">{address.replace(/(<([^>]+)>)/gi, "")}</p>
              <p className="discription">{description.replace(/(<([^>]+)>)/gi, "")}</p>
            </div>
            <div className="containerprice">
              <p className="price">{hotel.prices.price} NOK</p>
              <p className="pricenight">pr night</p>
              <Link href="/enquiry">
                <a className="buttonenquiry">Send enquiry</a>
              </Link>
            </div>
          </div>
          <img src={hotel.images[0].src} alt={hotel.images[0].alt} className="hotelimage" />
          <p className="facilities">The facilities</p>
          <div className="facilitiesinfo">
            <p>number of beds 2</p>
            <p>wifi at the hotel: yes</p>
            <p>Parking at the hotel: yes</p>
            <p>Breakfast included: yes</p>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(BASE_URL);

    console.log(response.data);

    const hotels = response.data;

    const paths = hotels.map((hotel) => ({
      params: { id: hotel.id.toString() },
    }));

    console.log(paths);

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = `${BASE_URL_ID}/${params.id}`;

  let hotel = null;

  try {
    const response = await axios.get(url);
    hotel = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { hotel: hotel },
  };
}
