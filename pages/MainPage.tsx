import { Card } from '../src/ui/Card';
import Logo from '../src/assets/logo.svg?react';
import { bookmark } from '../src/styles/ui/myPage.css';
import { main, subTitle } from '../src/styles/ui/mainPage.css';
import Bookmark from '../src/assets/bookmark.svg?react';
export const MainPage = () => {
  return (
    <div>
      <div
        className={bookmark}
        style={{
          width: '90%',
          margin: '25px auto',
        }}
      >
        <div className={main}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            오늘의 메뉴
            <Bookmark />
          </div>
          <Card
            icon={<Logo width={35} height={50} />}
            title="스타벅스"
            subTitle={<p className={subTitle}>아이스 아메리카노</p>}
          />
        </div>
      </div>
    </div>
  );
};
