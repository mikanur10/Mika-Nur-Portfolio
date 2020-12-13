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
        <a href="https://drive.google.com/file/d/1dZS_sXkrLoJkL_PB2onRZJu_wemDDBKp/view?usp=sharing"> Resumé</a>
      </div>
    </Menu>
  )
}