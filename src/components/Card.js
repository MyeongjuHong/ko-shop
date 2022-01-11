import React from "react";
import { Link } from "react-router-dom";
import cup_1 from "../img/cup_1.jpeg";
import soap_1 from "../img/soap_1.jpeg";
import doll_1 from "../img/doll_1.jpeg";
import "../App.css";

// 사진
// 제목
// 설명
function Card() {
  return (
    <div>
      <Link to="/goods" className="card">
        <div>
          <img className="cardThumb" alt="cup_1" src={cup_1} />
        </div>
        <h1 className="mainFont">빼꼼 곰돌이 내열유리컵 세트</h1>
        <div>9,900원</div>
      </Link>
      <Link to="/goods">
        <div>
          <img className="cardThumb" alt="soap_1" src={soap_1} />
        </div>
        <h1 className="mainFont">생곰이 핸드워시 선물세트</h1>
        <div>9,900원</div>
      </Link>
      <Link to="/goods">
        <div>
          <img className="cardThumb" alt="doll_1" src={doll_1} />
        </div>
        <h1 className="mainFont">소두곰 데코소품겸 필로우</h1>
        <div>19,900원</div>
      </Link>
    </div>
  );
}

export default Card;
