import styled from "styled-components";

export const AccordionButton = styled.button`
  background-color: "#eee";
  color: "#444";
  cursor: pointer;
  padding: 18px;
  min-width: 100%;
  max-width: 100%;
  border: none;
  font-size: 15px;
  transistion: 0.4s;
`;

export const AccordionPanel = styled.div`
  padding: 0 18px;
  display: ${(closed) => (closed ? `display:none` : `display:block`)}
  background-color: white;
  overflow: hidden;
`;

export const Paragraph = styled.p`
  color: blue;
  text-decoration: underline;
`;
