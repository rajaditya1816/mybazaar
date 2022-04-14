import React from "react";
import "./Home.css";
import Product from "./Product";
import image from "./My Retail Bestie.png";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={image} alt="" />

        <div className="home__row">
          <Product
            id="123213419"
            title="Book--The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="4953809421"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="49038507"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="2344593592"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="49038599"
            title="boAt Airdopes 121v2 True Wireless Earbuds (Active Black)"
            price={1199.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/510+wjzq-vL._SY450_.jpg"
          />
          <Product
            id="23445967"
            title="V-Guard Zenora RO+UF+MB 7 Litre Water Purifier With 7 Stage Purification and pH Balancer"
            price={8490.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/61JIQpSQDtL._SX466_.jpg"
          />
          <Product
            id="32543543"
            title="Vega Atom Dull Black Helmet-M for super racing bikes with extra security features"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/5166zn-o-cS._SX450_.jpg"
          />
          <Product
            id="152648530"
            title="GNC Pro Performance 100% Whey Protein - 4.4 lbs, 2 kg (Chocolate Fudge)"
            price={4724.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/817CqHqLIQL._SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829999"
            title="HP Chromebook x360 Intel Celeron N4020 Processor 12 inches Touchscreen Laptop, 4GB/64GB eMMC Storage/Chrome OS/1.35kg (Natural Silver), 12b-ca0010TU"
            price={36499.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/71WDdKKrkEL._SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1232134192"
            title="HP Chromebook 14 Intel Celeron N4020-4GB SDRAM/64GB eMMC + 256GB Expandable Storage 14inch(35.6 cm) Thin & Light Touchscreen Laptop "
            price={25599.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/71N0+IGOsLL._SX679_.jpg"
          />
          <Product
            id="49538094213"
            title="GoSriKi Women's Cotton Straight Kurta with Palazzo & Dupatta"
            price={699.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61yfVFby5dL._UY741_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
