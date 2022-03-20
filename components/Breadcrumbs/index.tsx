import Link from "next/link";
import React from "react";
import { A, LI, UL } from "./styles";

export enum Page {
  Home = "Home",
  Characters = "Characters",
  IndividualCharacter = "IndividualCharacter",
}
interface IBreadcrumbs {
  pageName: Page;
}
const Breadcrumbs = ({ pageName = Page.Home }: IBreadcrumbs) => {
  return (
    <UL>
      <LI>
        <A>
          <Link href="/">Home</Link>
        </A>
      </LI>
      {pageName === Page.Characters && (
        <LI>
          <A>
            <Link href="/characters">Character</Link>
          </A>
        </LI>
      )}

      {pageName === Page.IndividualCharacter && (
        <LI>
          <A>
            <Link href="/individual-character">Individual Character</Link>
          </A>
        </LI>
      )}
    </UL>
  );
};

export default Breadcrumbs;
