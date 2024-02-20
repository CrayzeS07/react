import React from "react";

export const MainData22 = ({ img, title }) => {
  return (
    <div>
      <div className="block-img1">
        <img src={img} alt="img" />
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export const MainData33 = ({ img, title, text }) => {
  return (
    <>
      <div className="xizmatlar">
        <div className="data_img_1">
          <img src={img} alt="img" />
        </div>
        <div className="tezkor">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};
export const MainData44 = ({ img }) => {
  return (
    <>
      <div className="img_a">
        <img src={img} alt="" />
      </div>
    </>
  );
};

export const MainData55 = ({ img, title, text, reyting, audio }) => {
  return (
    <>
      <div className="kitob">
        <img src={img} alt="img" />
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="block_book">
          <img src={reyting} alt="reyting" />
          <img className="img_audio" src={audio} alt="audio" />
        </div>
      </div>
    </>
  );
};
