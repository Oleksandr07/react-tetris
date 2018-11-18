import React from 'react';
import Menu, {Link, Button} from './Menu';

const PauseMenu = ({onResume}) => {
  return (
    <Menu>
      <Button onClick={{onResume}}>Продовжити</Button>
      <Link href="#">Головне меню</Link>
    </Menu>
  )
};

export default PauseMenu;