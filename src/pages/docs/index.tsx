import path from "path";
import { Link } from "@vulcanjs/next-material-ui"; // "next/link";
import { List, ListItem, Typography } from "@material-ui/core";
import IndexMd from "./INDEX.md";

const DocIndex = () => (
  <div style={{ margin: "32px auto", maxWidth: "1000px" }}>
    <Typography variant="h1">
      ◫ Acktueli ◫
    </Typography>
    <List>
      <IndexMd />
      <hr></hr>
      <Link href="/">
        <Typography>Back to home</Typography>
      </Link>
    </List>
  </div>
);

export default DocIndex;
