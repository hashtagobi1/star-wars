import React from "react";
import { AccordionButton, AccordionPanel, Paragraph } from "./styles";
import Link from "next/link";

interface IAccordion {
  sectionName: string;
  subMenu?: string[];
  closed: boolean;
  onClick(): void;
}

const Accordion = ({ sectionName, subMenu, onClick, closed }: IAccordion) => {
  return (
    <>
      <AccordionButton>
        <Link passHref href={`/`}>
          <h3>{sectionName}</h3>
        </Link>
      </AccordionButton>
      {subMenu &&
        subMenu.map((menuName, i) => (
          <AccordionPanel key={i}>
            <Link passHref href={`/${menuName}`}>
              <Paragraph onClick={onClick}>{menuName}</Paragraph>
            </Link>
          </AccordionPanel>
        ))}
    </>
  );
};

export default Accordion;
