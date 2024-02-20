import React from "react";
import img1 from "./main-img/human.png";
import { MainData11 } from "./mainData/mainData1";
import { MainData12 } from "./mainData/mainData1";
import { MainData13 } from "./mainData/mainData1";
import { NewBook } from "./mainData/mainData1";

export const MainHtml = () => {
  return (
    <>
      <div className="container">
        <div className="mainBlock">
          <div className="mainBlock1">
            <div className="bloc">
              <h1 className="h1">Кўп ўқилаётганлар</h1>
              <img src={img1} alt="img" />
            </div>
            <div className="bloc2">
              <MainData11 />
            </div>
          </div>
          <div className="mainBlock2">
            <div className="blockMain_23">
              <h3>Китоб ўқишни ёқтирасизми?</h3>
              <p>
                Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
              </p>
              <button className="btn_124">Обуна бўлиш</button>
            </div>
          </div>
        </div>
        <div className="Xizmatlarimiz">
          <MainData12 />
        </div>
        <div className="ruukunla">
          <h1>Рукнлар</h1>
          <MainData13 />
        </div>
        <div className="YangiKitob">
          <h1>Янги қўшилганлар</h1>
          <NewBook />
        </div>
      </div>
    </>
  );
};
