import { Product, FooterBanner, HeroBanner } from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["prod1", "prod2"].map((pro) => pro)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
