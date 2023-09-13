import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import "../../index.css";
import "../Styles/Header.css";

import { useNavigate } from "react-router-dom";
export default function Header(props) {
  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div
        className="logo container_wrapper"
        onClick={() => navigate("/login")}
      >
        <img className="netflix_img" src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign In"}
      </button>
    </Container>
  );
}

const Container = styled.div`
  .logo {
    display: flex;
    justify-content: space-between;
    padding: 0rem;

    img {
      height: 5rem;
    }
  }
  button {
    padding: 0.5rem 1rem;
    margin: 0rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: #fff;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;
