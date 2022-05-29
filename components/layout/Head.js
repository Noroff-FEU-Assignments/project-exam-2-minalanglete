import NextHead from "next/head";

export default function Head({ title = "" }) {
  return (
    <NextHead>
      <meta name="description" content="This is a booking hotel page for Holidaze" />
      <title>
        {title}
        {title ? " | " : ""} Holidaze
      </title>
    </NextHead>
  );
}
