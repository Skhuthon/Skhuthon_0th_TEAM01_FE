import { NavLink } from 'react-router-dom';
import { navigationBar, navigationItem } from '../styles/ui/navigation.css';
import HomeSVG from '../assets/home.svg?react';
import ProductSVG from '../assets/product.svg?react';
import MySVG from '../assets/my.svg?react';

const activeStyle = {
  borderTop: '5px solid #6F4E37',
  color: '#6F4E37',
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
        <HomeSVG />홈
      </NavLink>
      <NavLink
        to="/detail"
        className={navigationItem}
        activeStyle={activeStyle}
      >
        <ProductSVG />
        상품
      </NavLink>
      <NavLink
        className={navigationItem}
        to="/my_page"
        activeStyle={activeStyle}
      >
        <MySVG />
        마이
      </NavLink>
    </nav>
  );
};
