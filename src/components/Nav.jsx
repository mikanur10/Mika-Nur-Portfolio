import React from 'react';
import { slide as Menu } from "react-burger-menu";

export default function Nav(props) {
  return (
    <Menu {...props}>
      <div id="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="https://docs.google.com/document/d/1QH07Jxx0tcJMOAon6LZUC4oED85nLPek9CuLbNAOux4/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> Resumé</a>
      </div>
    </Menu>
  )
}