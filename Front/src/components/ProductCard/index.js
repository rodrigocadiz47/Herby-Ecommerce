import React from "react";

import s from "./style.module.css";

const ProductCard = function () {
  return (
    <div class={s.card}>
      <div class={s["card-img"]}>
        <img
          alt=""
          src="https://www.eluniverso.com/resizer/29qkFPHAP5BO2oFNkZLxlfyfpN0=/1005x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/DYL4SUBYLJAKDL2S3NN6AJHJJI.jpg"
        />
      </div>
      <div class={s["card-content"]}>
        <h2 class={s["card-title"]}>Banana</h2>
        <p class={s["card-text"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus
          nostrum!
        </p>
        <div class={s["card-bottom"]}>
          <small>$100</small>
          <button>+ ADD</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
