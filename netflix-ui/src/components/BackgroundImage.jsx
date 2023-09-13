import React from "react";
import background from "../img/login.jpg";
import styled from "styled-components";
import "../Styles/BG.css";
export default function BackgroundImage() {
  return (
    <Container>
      <img className="container" src={background} alt="background" />{" "}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;

    width: 100vw;
  }
`;
