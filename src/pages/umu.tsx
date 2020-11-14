import { useQuery /*, useMutation*/ } from "@apollo/client";
import gql from "graphql-tag";
import Umu from "~/components/umu";
import Head from "next/head";
import { Typography } from "@material-ui/core";
//import { useForm } from "react-hook-form";
import MDXMuiLayout from "~/components/layout/MDXMuiLayout";

const UmuPage = () => {
  const vulcanSiteDataQuery = gql`
    query getSiteData {
      siteData {
        url
        title
        sourceVersion
        logoUrl
      }
    }
  `;

  const { data, loading, error } = useQuery(vulcanSiteDataQuery);

  let content;
  if (loading) {
    content = `Connecting to your graphQL backend...`; // on ${client.name}`
  } else if (error) {
    if (error.networkError?.message === "Failed to fetch") {
      content = `No graphQL backend is running.`;
    } else {
      content = `Couldn't connect to your graphQL backend (${error}).`;
    }
  } else if (data) {
    content = `Successfully connected to your graphQL backend.\n Data: ${JSON.stringify(
      data,
      null,
      4
    )}`;
  }
  return (
    <MDXMuiLayout>
      <Head>
        <title>Acktueli[u☶u]</title>
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </Head>
      <main>
        <Umu />
        <Typography variant="body1"><em>is it uwu or umu...?</em></Typography>
        {/*content*/}
      </main>
      <style jsx>{`
        main {
          
        }
      `}</style>
    </MDXMuiLayout>
  );
};

export default UmuPage;
