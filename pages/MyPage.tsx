import {
  text_large,
  avatar,
  userInfoLayout,
  bookmark,
  changeInfoLayout,
  avatarLayout,
  pen,
} from '../src/styles/ui/myPage.css';
import { Avatar } from '../src/ui/Avatar';

import Bookmark from '../src/assets/bookmark.svg?react';
import Pen from '../src/assets/pen.svg?react';
import Border from '../src/assets/border.svg?react';
export const MyPage = () => {
  return (
    <div>
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

      <div className={changeInfoLayout}>
        <span>
          닉네임수정
          <Pen className={pen} />
        </span>
        <Border />
        <span>
          키,몸무게 수정
          <Pen className={pen} />
        </span>
      </div>
      <div
        className={bookmark}
        style={{
          width: '90%',
          margin: '25px auto',
        }}
      >
        즐겨찾기
        <Bookmark
          style={{
            marginLeft: '15px',
          }}
        />
      </div>
    </div>
  );
};
