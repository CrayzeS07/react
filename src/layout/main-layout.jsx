import React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <div className="container">
        <header>
          <Header />
        </header>
      </div>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
