import Heading from "../../components/layout/Heading";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../../components/constants/api";
import Footer from "../../components/layout/Footer";
import Link from "next/link";

export default function Hotel({ hotel }) {
  return (
    <Layout>
      <div className="containerdetailhotel">
        <Heading title={hotel.attributes.name} />
        <hr />
        <div>
          <div className="containerinfo">
            <div className="containeradress">
              <p className="address">{hotel.attributes.address}</p>
              <p className="discription">{hotel.attributes.description}</p>
            </div>
            <div className="containerprice">
              <p className="price">{hotel.attributes.price} NOK</p>
              <p className="pricenight">pr night</p>
              <Link href="/enquiry">
                <a className="buttonenquiry">Send enquiry</a>
              </Link>
            </div>
          </div>
          <img src="/bed.jpg" alt="hotelroom bed" className="hotelimage" />
          <p className="facilities">The facilities</p>
          <div className="facilitiesinfo">
            <p>number of beds {hotel.attributes.bed}</p>
            <p>wifi at the hotel: {hotel.attributes.wifi}</p>
            <p>Parking at the hotel: {hotel.attributes.parking}</p>
            <p>Breakfast included: {hotel.attributes.breakfast}</p>
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

    console.log(response.data.data);

    const hotels = response.data.data;

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
  const url = `${BASE_URL}/${params.id}`;

  let hotel = null;

  try {
    const response = await axios.get(url);
    hotel = response.data.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { hotel: hotel },
  };
}
