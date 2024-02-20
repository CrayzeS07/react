import React from "react";
import pngg from "./layout/woman.png";
import userAccaunt from "./layout/accaun.jpg";
//user nik

let strings = [
  "shoxrux Rustamov",
  "azimjon ",
  "Jamshidbek Fayzullayev",
  "Bexruz",
  "Lazizbek Xasanov",
  "Sardor Ibroximov",
  "Ibrohim Raxmonov",
];
let randomIndex = Math.floor(Math.random() * strings.length);
let uz = strings[randomIndex];

let numbers1 = parseInt(Math.random() * 99);
let numbers2 = parseInt(Math.random() * 99);
let tel = [`${numbers1} ${numbers2}`];
let Id = parseInt(Math.random() * 9999);
let sum = parseInt(Math.random() * 999);

//user nik

export const AaccountNT = () => {
  return (
    <div className="container">
      <div className="AccauntCard">
        <div className="CardUser">
          <img className="userAccaunt" src={userAccaunt} alt="userImg" />
        </div>
        <div className="UserDacuments">
          <h1 className="Uz_random">{uz}</h1>
          <p className="Tel">+998 90 777 {tel}</p>
          <span className="span">ID: {Id} </span>{" "}
          <span className="span">Balans: {sum} 000 сўм</span>
        </div>
      </div>
      <div className="page_All">
        <h3 className="h312">Узингиз севган булимга обуна бўлинг</h3>
        <img className="img_woman" src={pngg} alt="i" />
      </div>
      <div className="obuna">
        <div className="obuna1">
          <h1 className="subscribe">Обуна</h1>
          <h4 className="davomiyligi">Обуна давом этиш вакти</h4>
          <div className="boshlanish">
            <p>30 кун</p>
          </div>
          <h4 className="davomiyligi h12">fantastika</h4>
          <div className="boshlanish">
            <p>Фантастика </p>
            <h2 className="subscribe fs">Обуна 30 кун давом этади</h2>
          </div>
        </div>
        <div className="obuna2">
          <div className="n1">
            <p>Бошланиш вакти</p>
            <h4>12/09/2021</h4>
          </div>
          <div className="n1">
            <p>Якунланиш вакти</p>
            <h4>12/10/2021</h4>
          </div>
          <div className="n3">
            <p>Обуна нархи</p>
            <h4>12 000 сум</h4>
          </div>
          <button className="btn_123">Обуна булиш</button>
        </div>
      </div>
    </div>
  );
};
