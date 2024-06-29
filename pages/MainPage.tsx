import './mainPage.css';
import { Card } from '../src/ui/Card';
import Logo from '/public/logo.svg?react';
import { bookmark } from '../src/styles/ui/myPage.css';
import { useAuthContext } from '../src/authContext';
import { main, subTitle } from '../src/styles/ui/mainPage.css';
import Bookmark from '/public/bookmark.svg?react';
import { mainLayout } from '../src/styles/ui/mainPage.css';
import ProgressBar from '@ramonak/react-progress-bar';
import Banner from '/public/banner.svg?react';
import { useEffect, useState } from 'react';
import { getMyPage } from '../src/service/mypage';
import { getRandomCoffee } from '../src/service/detail';

interface mainProps {
  brand: string;
  menu: string;
  caffeine: number;
}

export const MainPage = () => {
  const [recommend, setRecommend] = useState<null | mainProps>(null);
  const context = useAuthContext();

  useEffect(() => {
    getMyPage().then((res) =>
      context?.setAuth({
        name: res.name,
        profile: res.profile,
        role: res.role,
        canCaffeineIntakeAmount: res.canCaffeineIntakeAmount,
        todayCaffeineIntakeAmount: res.todayCaffeineIntakeAmount,
        email: res.email,
      })
    );

    getRandomCoffee().then(({ brand, menu, caffeine }) => {
      setRecommend({ brand, menu, caffeine });
    });
  }, []);

  const calculatePercentage = () => {
    if (
      context?.auth?.todayCaffeineIntakeAmount &&
      context?.auth?.canCaffeineIntakeAmount
    ) {
      return (
        (context.auth.todayCaffeineIntakeAmount /
          context.auth.canCaffeineIntakeAmount) *
        100
      );
    }
    return 0;
  };

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
          completed={calculatePercentage()}
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
          <span>{context?.auth?.canCaffeineIntakeAmount}mg</span>
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
            title={recommend?.brand}
            subTitle={<p className={subTitle}>{recommend?.menu}</p>}
          />
        </div>
      </div>
    </div>
  );
};
