import { Headers } from "../UI/Header.jsx";
import { Footer } from "../UI/Footer.jsx";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};
