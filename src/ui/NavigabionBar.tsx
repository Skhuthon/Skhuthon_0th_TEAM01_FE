import { NavLink } from 'react-router-dom';
import { navigationBar, navigationItem } from '../styles/ui/navigation.css';

const activeStyle = {
  borderTop: '1px solid #6F4E37',
};

export const NavigationBar = () => {
  return (
    <nav className={navigationBar}>
      <NavLink
        className={navigationItem}
        to="/"
        exact={true}
        activeStyle={activeStyle}
      >
        홈
      </NavLink>
      <NavLink
        to="/detail"
        className={navigationItem}
        activeStyle={activeStyle}
      >
        상품
      </NavLink>
      <NavLink
        className={navigationItem}
        to="/my_page"
        activeStyle={activeStyle}
      >
        마이
      </NavLink>
    </nav>
  );
};
