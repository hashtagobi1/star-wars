import React, { ReactNode } from "react";
import Nav from "../Nav";
import Sidebar from "../Sidebar";
import { LayoutStyles } from "./styles";
interface ILayout {
  children: ReactNode;
}
const Layout = ({ children }: ILayout) => {
  return (
    <LayoutStyles>
      <Sidebar/>
      <Nav />
      {children}

    </LayoutStyles>
  );
};

export default Layout;
