import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useParams } from 'react-router-dom';
import db_items from "../Category/db/data"

const ProductDetails = () => {
  const [imgId, setImgId] = useState(1);

  const handleImageClick = (event, id) => {
    event.preventDefault();
    setImgId(id);
  };
  const { title } = useParams();
  console.log(title)
  // const itemInDatabase = db_items.find((item) => title === item.title);
  const itemInDatabase = db_items.find((item) => title === item.title)
  console.log(itemInDatabase);

  useEffect(() => {
    const displayWidth = document.querySelector(
      ".img-showcase img:first-child"
    ).clientWidth;
    document.querySelector(".img-showcase").style.transform = `translateX(${-(imgId - 1) * displayWidth
      }px)`;
  }, [imgId]);

  const ProdcutDetailArr = [
    {
      id: 1,
      pname: itemInDatabase.title,
      pdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.",
      powner: "Ram Shinde",
      requiredment: "Office Chair",
      dateOfPurchase: "12/10/2022",
    }
  ];

  const imgBtns = [
    {
      id: 1,
      src: itemInDatabase.img,
      alt: "shoe image",
    },
  ];

  function handleCart(title) {
    if (localStorage.getItem("cart")) {
      let citems = [localStorage.getItem("cart")];
      let c_items = JSON.parse(citems);
      console.log(c_items)
      c_items.push(title);
      localStorage.setItem("cart", JSON.stringify(c_items));
    }
  }
  return (
    <>
      <Navbar />

      <section className="productDetailContainer">
        <div className="ProductcardWrapper">
          <div className="DetailProductcard">
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                  {imgBtns.map((imgItem) => (
                    <img key={imgItem.id} src={imgItem.src} alt={imgItem.alt} />
                  ))}
                </div>
              </div>
              <div className="subimages">
                <div className="img-select">
                  {imgBtns.map((imgItem) => (
                    <div className="img-item" key={imgItem.id}>
                      <a
                        href="#"
                        data-id={imgItem.id}
                        onClick={(event) => handleImageClick(event, imgItem.id)}
                      >
                        <img src={imgItem.src} alt={imgItem.alt} />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="img-select">
                  {imgBtns.map((imgItem) => (
                    <div className="img-item" key={imgItem.id}>
                      <a
                        href="#"
                        data-id={imgItem.id}
                        onClick={(event) => handleImageClick(event, imgItem.id)}
                      >
                        <img src={imgItem.src} alt={imgItem.alt} />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="img-select">
                  {imgBtns.map((imgItem) => (
                    <div className="img-item" key={imgItem.id}>
                      <a
                        href="#"
                        data-id={imgItem.id}
                        onClick={(event) => handleImageClick(event, imgItem.id)}
                      >
                        <img src={imgItem.src} alt={imgItem.alt} />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="img-select">
                  {imgBtns.map((imgItem) => (
                    <div className="img-item" key={imgItem.id}>
                      <a
                        href="#"
                        data-id={imgItem.id}
                        onClick={(event) => handleImageClick(event, imgItem.id)}
                      >
                        <img src={imgItem.src} alt={imgItem.alt} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {ProdcutDetailArr.map((pItem) => (
              <div className="product-content">
                <h2 className="product-title">{pItem.pname}</h2>
                <div className="product-detail">
                  <h2>about this item: </h2>
                  <p>
                    {pItem.pdesc}
                  </p>

                  <ul>
                    <li>
                      Cost: {itemInDatabase.newPrice}
                    </li>
                    <li>
                      Delivery In Next 6 days!
                    </li>
                  </ul>
                </div>

                <div className="purchase-info">
                  <button class="CartBtn">
                    <span class="IconContainer">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                    </span>
                    <p class="text" onClick={() => handleCart(pItem.pname)}>Add to Cart</p>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetails;
