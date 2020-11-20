import "~/types/mdx.d.ts"; // TODO: load this automatically
import HomeMd from "./HOME.md";
import { Typography } from "@material-ui/core";

export const Home = () => (
  <div>
    <HomeMd />
  </div>
);

export default Home