import React from "react";
import { MainData22 } from "./mainData2";
import { DataMain } from "./mainData";
import { MainData33 } from "./mainData2";
import { Data_block } from "./mainData";
import { Link } from "react-router-dom";

export const MainData11 = () => {
  return (
    <div>
      <div className="mainDataImg">
        {DataMain.map((Uz) => (
          <MainData22 key={Uz.id} img={Uz.img} title={Uz.title} />
        ))}
      </div>
    </div>
  );
};

export const MainData12 = () => {
  return (
    <>
      <div className="xizmat_korsatish">
        {Data_block.map((NT) => (
          <MainData33
            key={NT.id}
            img={NT.img}
            title={NT.title}
            text={NT.text}
          />
        ))}
      </div>
    </>
  );
};

import { Data_bloxk } from "./mainData";
import { MainData44 } from "./mainData2";
export const MainData13 = () => {
  return (
    <>
      <div className="slider">
        {Data_bloxk.map((A) => (
          <MainData44 key={A.id} img={A.img} />
        ))}
      </div>
    </>
  );
};

import { MainData55 } from "./mainData2";
import { YangiKitoblar } from "./mainData";

export const NewBook = () => {
  return (
    <>
      <div className="New">
        {YangiKitoblar.map((V) => (
          <Link to={`/about/${V.id}`} key={V.id}>
            <MainData55
              key={V.id}
              img={V.img}
              title={V.title}
              text={V.text}
              reyting={V.reyting}
              audio={V.audio}
            />
          </Link>
        ))}
      </div>
    </>
  );
};
