import Logo from '/public/logo.svg?react';
import { userInfoLayout } from '../styles/ui/myPage.css';

export const BookMarkFallback = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <Logo width={35} height={50} />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'column',
        }}
      >
        <p
          style={{
            fontWeight: '700',
          }}
        >
          즐겨찾기 한 메뉴가 없어요
        </p>
        <p className={userInfoLayout}>마음에 드는 메뉴를 골라보세요</p>
      </div>
    </div>
  );
};
