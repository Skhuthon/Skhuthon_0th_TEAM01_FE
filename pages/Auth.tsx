import {
  mainPage,
  header,
  p,
  LoginContainer,
} from '../src/styles/ui/mainPage.css';

import { useAuthContext } from '../src/authContext';
import { Card } from '../src/ui/Card';
import Logo from '../src/assets/logo.svg?react';
import NaverLogin from '../src/assets/naverlogin.svg?react';
import CheckIcon from '../src/assets/check.svg?react';
export const AuthPage = () => {
  const context = useAuthContext();

  return (
    <div className={` ${mainPage}`}>
      <h2 className={header}>카페인 벨런스</h2>
      <p className={p}>카페인 벨런스는 어쩌구</p>
      <Logo
        style={{
          marginTop: '25px',
        }}
      />
      <Card
        icon={<CheckIcon />}
        title={'각 프렌차이즈 별로 다른 메뉴를 볼 수 있어요'}
        style={{
          marginTop: '15px',
        }}
      />
      <Card
        icon={<CheckIcon />}
        title={'어쩌구저쩌구'}
        style={{
          marginTop: '15px',
        }}
      />
      <Card
        icon={<CheckIcon />}
        title={'어쩌구저쩌구'}
        style={{
          marginTop: '15px',
        }}
      />

      <div className={LoginContainer}>
        <NaverLogin
          width={320}
          height={40}
          onClick={() => {
            context?.setAuth({
              name: 'asd',
              profile: 'asdasd',
              email: 'asdasd',
              role: 'asdasd',
              todayCaffeineIntakeAmount: 0,
              canCaffeineIntakeAmount: 1,
            });

            window.location.href = 'http://localhost:5173/my_page';
          }}
          style={{
            borderRadius: '15px',
            cursor: 'pointer',
          }}
        />
      </div>
    </div>
  );
};
