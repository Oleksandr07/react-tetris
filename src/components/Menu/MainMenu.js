import React from 'react';
import Menu, {Link} from './Menu.js';

export default () => (
  <Menu>
    <Link href="#" >Нова гра</Link>
    <Link href="#" disabled>Завантажити гру</Link>
    <Link href="#" >Лідери</Link>
  </Menu>
)