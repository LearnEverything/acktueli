import "~/types/mdx.d.ts"; // TODO: load this automatically
import Readme from "../../../README.md";
import { Typography } from "@material-ui/core";

export default () => (
  <div>
    <Readme />
  </div>
);
