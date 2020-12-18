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
        <a href="https://drive.google.com/file/d/1I1nHqA9cN0lsJgiMkWsuPKSJz6RKU51p/view?usp=sharing"> Resumé</a>
      </div>
    </Menu>
  )
}