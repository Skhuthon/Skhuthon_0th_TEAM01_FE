import { navigationBar } from '../styles/ui/navigation.css';

export const NavigationBar = () => {
  return (
    <nav className={navigationBar}>
      <span>홈</span>
      <span>상품</span>
      <span>마이</span>
    </nav>
  );
};
