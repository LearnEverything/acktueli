import Home from "~/components/home";
//import { useForm } from "react-hook-form";
import MDXMuiLayout from "~/components/layout/MDXMuiLayout";

const HomePage = () => {
  return (
    <MDXMuiLayout>
      <main>
        <Home />
        {/*content*/}
      </main>
    </MDXMuiLayout>
  );
};

export default HomePage;
