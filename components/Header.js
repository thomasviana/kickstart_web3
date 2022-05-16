import React from 'react';
import { Menu } from 'semantic-ui-react';
<<<<<<< HEAD
import { Link } from '../routes';
=======
>>>>>>> 1dc460f484dad357095fb753a3d82dfa4a3fd3b1

const Header = (props) => {
  return (
    <Menu style={{ marginTop: '10px' }}>
<<<<<<< HEAD
      <Link route="/">
        <a className="item">K i c k S t a r t</a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Campaigns</a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>
=======
      <Menu.Item>Kickstart</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>Campaigns</Menu.Item>

        <Menu.Item>+</Menu.Item>
>>>>>>> 1dc460f484dad357095fb753a3d82dfa4a3fd3b1
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
