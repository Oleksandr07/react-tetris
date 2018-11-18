import React from 'react';
import './Menu.css';

export const Link = ({children, disabled, ...props}) => {
  return (
    <a className={`link ${disabled && 'disabled'}`} {...props}>
      {children}
    </a>
  )
};


export const Button = ({children, ...props}) => {
  return (
    <button className="link" {...props}>
      {children}
    </button>
  )
};

const Menu = ({title, children}) => {
  return(
    <nav className="menu">
      {title}
      <ul>
        {children.map((child, i) => (
          <li key={i}>{child}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu;