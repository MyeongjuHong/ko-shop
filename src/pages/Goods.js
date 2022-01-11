import React from "react";
import { Link } from "react-router-dom";
import cup_1 from "../img/cup_1.jpeg";
import cup_2 from "../img/cup_2.jpg";
import Button from "../components/Button";
import "../App.css";

function Goods() {
  return (
    <div>
      <h1 className="header">코-숍</h1>
      <div className="goodsMain">
        <img className="goodsThumb" alt="cup_1" src={cup_1} />
        <h1 className="mainFont">빼꼼 곰돌이 내열유리컵 세트</h1>
        <div>9,900원</div>
      </div>
      <div className="descRev1">
        <span className="descRev2">상품 설명</span>
        <span className="descRev2">상품 후기</span>
      </div>
      <div>
        <img className="goodsDesc" alt="cup_2" src={cup_2} />
      </div>

      <Button />
    </div>
  );
}

export default Goods;
