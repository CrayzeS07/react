import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { MainHtml } from "./layout/main/home";
import { About } from "./layout/abaut";
import { ProdactPage } from "./prodact-detail";
import { AaccountNT } from "./useAccaunt";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainHtml />} />
          <Route
            path="*"
            element={
              <p className="Error1">Bunaday page mavjud emas ¯\_(ツ)_/¯ </p>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="about/:pro" element={<ProdactPage />} />
          <Route path="aboute/:user" element={<AaccountNT/>} />
        </Route>
      </Routes>
      ;
    </div>
  );
}
export default App;
