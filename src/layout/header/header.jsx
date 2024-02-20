import React, { lazy } from "react";
import Logo from "./header-img/logo.svg";
import tabs from "./header-img/tab.svg";
import past from "./header-img/past.svg";
import Search from "./header-img/search.svg";
import uzb from "./header-img/uzb.svg";
import { Link } from "react-router-dom";
import userAccaunt from "./header-img/accaun.jpg"

export const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <Link to={`/`}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="tabs">
          <img className="tab" src={tabs} alt="tab" />
          <h3 className="rukun">Рукнлар</h3>
          <img className="img1" src={past} alt="img" />
        </div>
        <div className="search_input">
          <form className="search">
            <input className="input_search" type="text" placeholder="Қидириш" />
            <div className="search_img">
              <img src={Search} alt="img" />
            </div>
          </form>
        </div>
        <div className="btn_header">
          <div className="uzb">
            <img className="img2" src={uzb} alt="img" />
            <h3 className="rukun">Ўз</h3>
            <img className="img3" src={past} alt="img" />
          </div>
        </div>
        <div className="btn">
          <Link to={`aboute/:user`}>
            <img
              loading={lazy}
              className="korzinka"
              src={userAccaunt}
              alt="img"
            />
          </Link>
        </div>
      </div>
      <div className="block_header">
        <ul className="ul">
          <li className="li">Аудиокитоб</li>
          <a href="#">
            {" "}
            <li className="li">Электрон китоблар</li>
          </a>
          <li className="li">Босма китоблар</li>
          <li className="li">Контакт</li>
          <li className="li">Биз хақимизда</li>
        </ul>
      </div>
    </div>
  );
};
