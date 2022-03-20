import React, { useState } from "react";
import logo from "../../assets/SW_logo.png";
import Image from "next/image";
import Accordion from "../Accordion";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  console.log(open)

  const onClick_Accordion = () => {
    setOpen(!open);
  };

  return (
    <div
      style={{
        border: "3px solid #c3c",
      }}
    >
      <Image
        src={logo}
        height={100}
        width={100}
        alt="star wars logo"
        priority
      />

      <div>
        <Accordion
          closed={open}
          onClick={onClick_Accordion}
          sectionName="Home"
        />
      </div>
      <div>
        <Accordion
          closed={open}
          onClick={() => {}}
          sectionName="Star Wars"
          subMenu={["characters"]}
        />
      </div>
    </div>
  );
};

export default Sidebar;
