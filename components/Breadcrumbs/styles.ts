import styled from "styled-components";

export const LI = styled.li``;
export const A = styled.a``;

export const UL = styled.ul`
  padding: 10px 16px;
  list-style: none;
  background-color: #eee;

  ${LI} {
    display: inline;
    font-size: 18px;
    color: blue;
    list-style: none;
    text-decoration: underline;
    padding: 5px;
  }

  ${LI} ${A} {
    color: #0275d8;
  }
  ${LI} + ${LI}:before {
    padding: 8px;
    color: black;
    content: "/\00a0";
  }

  ${LI} ${A}:hover {
    color: #014473;
    text-decoration: underline;
  }
`;
