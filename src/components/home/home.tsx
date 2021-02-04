import "~/types/mdx.d.ts"; // TODO: load this automatically
import HomeMd from "./home.md";
import { Typography } from "@material-ui/core";
import Head from "next/head";

export const Home = () => (
  <>
  <Head>
      <link rel="icon" href="/favicon_io/favicon.ico" />
      <meta name="description" content="You have Acktueli found the language of Shielkwamm!"></meta>
    </Head>
  <div>
    <HomeMd />
  </div>
  </>
);

export default Home