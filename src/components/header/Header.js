import React, { useState, useContext } from "react";
import * as S from "../styles/headerStyled";
import logo from "../img/Pokémon-Logo1-PNG.png";
import logo2 from "../img/png-clipart-pokemon-logo-pokemon-logo-removebg-preview.png";
import { ThemeContext, headerThemes } from "../context/theme-context";
import styled from "styled-components";

const Header = () => {
  const { themeHeader, setThemeHeader } = useContext(ThemeContext);
  const headerClara = themeHeader.background;

  const Header = styled.header`
    background-color: ${headerClara};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  `;
  return (
    <Header>
      {(headerClara === "#DEF2B3" && <S.LinkHeader to='/'> <S.Logo src={logo2} alt="" /></S.LinkHeader>) ||
        (headerClara === " #262626" && <S.LinkHeader to='/'><S.Logo src={logo} alt="" /></S.LinkHeader>)} 
    </Header>
  );
};

export default Header;
