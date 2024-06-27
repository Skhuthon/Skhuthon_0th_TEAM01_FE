import {
  text_large,
  avatar,
  userInfoLayout,
  avatarLayout,
} from '../src/styles/ui/myPage.css';
import { Avatar } from '../src/ui/Avatar';

export const MyPage = () => {
  return (
    <div className={avatarLayout}>
      <Avatar
        src="https://avatar.iran.liara.run/public/25"
        className={avatar}
      />
      <div>
        <div>
          <span className={text_large}>김효중</span>
          <span
            style={{
              marginLeft: '100px',
            }}
            className={userInfoLayout}
          >
            로그아웃
          </span>
        </div>
        <p className={userInfoLayout}>200KM/20KG</p>
      </div>
    </div>
  );
};
