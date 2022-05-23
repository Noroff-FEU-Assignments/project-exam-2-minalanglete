import Heading from "../../components/layout/Heading";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../../components/constants/api";

export default function Hotel({ hotel }) {
  return (
    <Layout>
      <Heading title={hotel.attributes.name} />
      <div>
        <p>{hotel.attributes.address}</p>
        <p>{hotel.attributes.description}</p>
      </div>
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
