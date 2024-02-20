import React from "react";
import { useParams } from "react-router-dom";
import { YangiKitoblar } from "./layout/main/mainData/mainData";
import { Link } from "react-router-dom";
import stars from "./pro_img/stars.png";
import chat from "./pro_img/chat.png";
import noushnik from "./pro_img/noushnik.png";
import car from "./pro_img/car.png";
let reytings = parseInt(Math.random() * 5);
let fikr = parseInt(Math.random() * 300);
let prise = parseInt(Math.random() * 300);
let prise1 = parseInt(Math.random() * 200);

export const ProdactPage = () => {
  const params = useParams();
  const krytek = YangiKitoblar.find((Cry) => Cry.id === Number(params.pro));
  console.log(krytek);
  return (
    <div className="container">
      <Link to={`/`}>
        <button className="btn_orqa">orqaga</button>
      </Link>
      <div className="block_Nt">
        <div className="tavar_img">
          <img src={krytek.img} alt="img" />
        </div>
        <div className="uzb12">
          <div className="tavar_krytek">
            <h1 className="titul_text">{krytek.title}</h1>
            <img className="audi1" src={krytek.audio} alt="audio" />
            <img className="stars" src={stars} alt="img" />
            <h3 className="reytn">{reytings}.0</h3>
            <img className="chats" src={chat} alt="img" />
            <h3 className="h3fikir">{fikr}</h3>
            <p className="h3fikir">Фикрлар</p>
          </div>
          <div className="tavar213">
            <p className="p123">{krytek.text}</p>
            <p className="p_all">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
              <br /> Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.{" "}
            </p>
            <div className="btn_prise">
              <div className="bt1">
                <img src={car} alt="" />
                <p>Сотиб олиш - {prise} 000 сум</p>
              </div>
              <div className="bt2">
                <img src={noushnik} alt="img" />
                <p>Аудио тинглаш - {prise1} 000 сум</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
