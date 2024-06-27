import { NavLink, useLocation } from 'react-router-dom';
import { navigationBar, navigationItem } from '../styles/ui/navigation.css';
import HomeSVG from '../assets/home.svg?react';
import ProductSVG from '../assets/product.svg?react';
import MySVG from '../assets/my.svg?react';

const activeStyle = {
  borderTop: '5px solid #6F4E37',
  color: '#6F4E37',
};

const activeSVGStyle = {
  fill: '#6F4E37',
  stroke: '#6F4E37',
};

export const NavigationBar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className={navigationBar}>
      <NavLink
        className={navigationItem}
        exact
        to="/"
        activeStyle={activeStyle}
      >
        <HomeSVG style={path === '/' ? activeSVGStyle : {}} />홈
      </NavLink>
      <NavLink
        to="/detail"
        className={navigationItem}
        activeStyle={activeStyle}
      >
        <ProductSVG style={path === '/detail' ? activeSVGStyle : {}} />
        상품
      </NavLink>
      <NavLink
        className={navigationItem}
        to="/my_page"
        activeStyle={activeStyle}
      >
        <MySVG style={path === '/my_page' ? activeSVGStyle : {}} />
        마이
      </NavLink>
    </nav>
  );
};
