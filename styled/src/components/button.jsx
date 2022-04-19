
import styled from 'styled-components';

const Button = styled.button`
background-color: ${(props) => props.bg==="true" ? "#74B5E8": "transparent"};
color: ${(props) => props.color==="true" ? "#74B5E8": "black"};
border: ${(props) => props.b==="true" ? "transparent": "1 px solid black" };
margin: 10px;
border-style: ${(props) => props.dot==="true" ? "dashed": props.bg ===  "true" ? "none":"" };

`;

export {Button}