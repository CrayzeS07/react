import React from "react";
import img23 from "./footer_img/google.svg";
import img24 from "./footer_img/appStore.svg";
import facebook from "./footer_img/faceobook.svg";
import youtube from "./footer_img/youtube.svg";
import tiktok from "./footer_img/tiktok.svg";
import telegram from "./footer_img/telegram.svg";
import instagram from "./footer_img/instagram.svg";
export const Footer = () => {
  return (
    <>
      {" "}
      <div className="block_footer">
        <div className="container">
          <div className="footer_1">
            <div className="ul_block">
              <ul>
                <p className="paltforma">Платформа хақида</p>
                <li className="li22">Liber ўзи нима?</li>
                <li className="li22">Фойдаланиш шартлари</li>
                <li className="li22">Ёрдам</li>
              </ul>
              <ul>
                <p className="paltforma">Обуна хақида</p>
                <li className="li22">Обуна бўлиш</li>
                <li className="li22">Қандай тўлаш</li>
              </ul>
              <ul>
                <p className="paltforma">Китоблар</p>
                <li className="li22">Аудио китоблар</li>
                <li className="li22">Электрон китоблар</li>
                <li className="li22">Китоблар</li>
              </ul>
              <div className="block_apk">
                <h3 className="mobil">Мобил илова</h3>
                <img className="i1" src={img23} alt="img" />
                <br />
                <img className="i2" src={img24} alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer_2">
          <div className="container">
            <div className="footer_3">
              <div className="foter">
                <p>Ижтимоий тармоқлар</p>
                <img src={youtube} alt="img" />
                <img className="foter_img" src={tiktok} alt="img" />
                <img className="foter_img" src={facebook} alt="img" />
                <img className="foter_img" src={telegram} alt="img" />
                <img className="foter_img" src={instagram} alt="img" />
              </div>
              <div className="boganish">
                <p>Боғланиш</p>
                <span className="span">
                  +998 90 253 77 53 <span>support@liber.uz</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
