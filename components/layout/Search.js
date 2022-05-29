import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { BASE_URL } from "../constants/api";

export default function Search(props) {
  const serchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const serachendpoint = (query) => {
    hotel.name;
  };

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(serachendpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.results);
        });
    } else {
      setResults([]);
    }
  }, []);
  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onclick);
  }, []);

  const onClick = useCallback((event) => {
    if (serchRef.current && !serchRef.current.contain(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <div ref={serchRef}>
      <input
        onChange={onChange}
        onFocus={onFocus}
        placholder="search hotels in Bergen"
        type="text"
        value={query}
      />
      {active && results.length > 0 && (
        <ul>
          {props.hotels.map((hotel) => {
            <li key={hotel.id}>
              <Link href={`hotel/${hotel.id}`}>
                <a>{hotel.name}</a>
              </Link>
            </li>;
          })}
        </ul>
      )}
    </div>
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
