import Head from "next/head";
import MainBanner from "../src/components/HomeMainBanner";
import HomeSections from "../src/components/HomeSection";
import ProductList from "../src/components/ProductList";
import UsersFeedback from "../src/components/UsersFeedback";

export default function Home() {
  return (
    <>
      <Head>
        <title>eNext</title>
      </Head>

      <MainBanner />
      <HomeSections />
      <ProductList />
      <UsersFeedback />
      
    </>
  );
}
