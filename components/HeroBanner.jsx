import Link from "next/link";

// import { urlFor } from "../lib/client";s

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">
          {/* {heroBanner.smallText} */}
          SMALLtext
        </p>
        <h3>
          {/* {heroBanner.midText} */}
          midtext
        </h3>
        <h1>
          {/* {heroBanner.largeText1} */}
          largetext
        </h1>
        <img src="" alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/ID`}>
            <button type="button">buttonText</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>desc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
