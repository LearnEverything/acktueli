import "~/types/mdx.d.ts"; // TODO: load this automatically
import { Typography } from "@material-ui/core";

export default () => (
  <div>
    <Typography variant="h1" className={"umu"}>☶ u☶u ☶</Typography>
    <style jsx>{`
      @-webkit-keyframes pulse {
        0% { -webkit-transform: scale(0.9); opacity: 0.7; }
        50% { -webkit-transform: scale(1); opacity: 1; }
        100% { -webkit-transform: scale(0.9); opacity: 0.7; }
      }
      
      @keyframes pulse {
        0% { transform: scale(0.9); opacity: 0.7; }
        50% { transform: scale(1); opacity: 1; }
        100% { transform: scale(0.9); opacity: 0.7; }
      }
      
      #umu {
        background-color: #35D857;
        animation: pulse 3s infinite ease-in-out;
      }      
    `}</style>
  </div>
);
