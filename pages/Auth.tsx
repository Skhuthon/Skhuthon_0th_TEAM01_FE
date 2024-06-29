import {
  mainPage,
  header,
  p,
  LoginContainer,
} from '../src/styles/ui/mainPage.css';

import { Card } from '../src/ui/Card';
import Logo from '../src/assets/logo.svg?react';
import NaverLogin from '../src/assets/naverlogin.svg?react';
import CheckIcon from '../src/assets/check.svg?react';
export const AuthPage = () => {
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
          onClick={() => {}}
          style={{
            borderRadius: '15px',
            cursor: 'pointer',
          }}
        />
      </div>
    </div>
  );
};
