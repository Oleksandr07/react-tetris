import React from 'react';
import './Menu.css';

export const Link = ({children, ...props}) => {
  return (
    <a className="btn" {...props}>
      {children}
    </a>
  )
};


export const Button = ({children, ...props}) => {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  )
};

const Menu = ({title, children}) => {
  return(
    <nav className="menu">
      {title}
      {children.map((child, i) => (
        <p key={i}>{child}</p>
      ))}
    </nav>
  )
}

export default Menu;