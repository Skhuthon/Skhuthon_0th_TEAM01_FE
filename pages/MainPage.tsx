import './mainPage.css';
import { Card } from '../src/ui/Card';
import Logo from '../src/assets/logo.svg?react';
import { bookmark } from '../src/styles/ui/myPage.css';
import { main, subTitle } from '../src/styles/ui/mainPage.css';
import Bookmark from '../src/assets/bookmark.svg?react';
import { mainLayout } from '../src/styles/ui/mainPage.css';
import ProgressBar from '@ramonak/react-progress-bar';
import Banner from '../src/assets/banner.svg?react';
export const MainPage = () => {
  return (
    <div>
      <Banner className="banner" />
      <div
        className={bookmark}
        style={{
          width: '90%',
        }}
      >
        <div className={main}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '20px',
            }}
          >
            일일권장카페인섭취량
            <Bookmark />
          </div>
        </div>
      </div>
      <div className={mainLayout}>
        <ProgressBar
          labelSize="12px"
          animateOnRender
          completed={60}
          width="100%"
          bgColor="#6F4E37"
          maxCompleted={100}
        />
        <div
          style={{
            display: 'flex',
            color: '#999999',
            fontSize: '10px',
            justifyContent: 'space-between',
          }}
        >
          <span>0mg</span>
          <span>1000mg</span>
        </div>
      </div>
      <div
        className={bookmark}
        style={{
          width: '90%',
          margin: '20px auto',
        }}
      >
        <div className={main}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '20px',
              marginTop: '25px auto',
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
