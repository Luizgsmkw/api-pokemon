import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  ThemeContext,
  themes,
  headerThemes,
  cardThemes,
} from "../context/theme-context";
import styled from "styled-components";
import * as S from "../styles/pokemonStyled";
import { TiAdjustBrightness, TiAdjustContrast } from "react-icons/ti";
const Pokemon = () => {
  const buttonClaro = <TiAdjustBrightness />;
  const buttonEscuro = <TiAdjustContrast />;
  const { theme, setTheme } = useContext(ThemeContext);
  const { themeHeader, setThemeHeader } = useContext(ThemeContext);
  const { themeCard, setThemeCard } = useContext(ThemeContext);
  const clara = theme.color;
  const clara2 = theme.background;
  const cardClaro = themeCard.backgroundImage;

  const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${clara};
    background-color: ${clara2};
    min-height: 89.7vh;
    margin-top: 0;
  `;
  const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    width: 200px;
    border: 1px solid black;
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-image: ${cardClaro};
  `;

  const Button = styled.button`
    width: 200px;
    margin: auto;
    margin-top: 0;
    padding: 10px;
    border-radius: 10px;
    color: ${clara};
    background-image: ${cardClaro};
    margin-bottom: 10px;
    border: none;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  `;

  const pokemonPormises = [];
  const [pokemons, setPOkemons] = useState([]);
  const [num1, setNum1] = useState(10);

  for (let i = 1; i <= num1; i++) {
    pokemonPormises.push(
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-form/${i}`)
        .then((response) => response.data)
    );
  }

  useEffect(() => {
    axios.all(pokemonPormises).then((response) => setPOkemons(response));
  }, [num1]);

  return (
    <Main>
      <S.DivButton>
        <S.Button
          onClick={() => {
            setTheme(theme === themes.light ? themes.dark : themes.light);

            setThemeHeader(
              themeHeader === headerThemes.light
                ? headerThemes.dark
                : headerThemes.light
            );
            setThemeCard(
              themeCard === cardThemes.light
                ? cardThemes.dark
                : cardThemes.light
            );
          }}
        >
          {(clara === "#000000" && buttonClaro) ||
            (clara === "#fff" && buttonEscuro)}
        </S.Button>
      </S.DivButton>
      <S.ContainerCards>
        {pokemons.map((item, index) => (
          <Card key={index}>
            <img src={item.sprites.front_default} alt="" />
            <p>{item.pokemon.name}</p>
            <Link to={`/${index + 1}`}>saiba mais</Link>
          </Card>
        ))}
      </S.ContainerCards>
      <Button onClick={() => setNum1(num1 + 10)}>Carregar mais pokemons</Button>
    </Main>
  );
};

export default Pokemon;
