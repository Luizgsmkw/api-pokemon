import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Logo = styled.img`
  width: 150px;
  height: 60px;
`;

export const LinkHeader = styled(Link) `
    color: hsl(0, 100%, 63%);
    text-decoration: none;
    cursor: pointer;
`