import { useState, useEffect } from 'react';
import {
  text_large,
  avatar,
  userInfoLayout,
  bookmark,
  changeInfoLayout,
  avatarLayout,
  pen,
} from '../src/styles/ui/myPage.css';
import { useAuthContext } from '../src/authContext';
import { Avatar } from '../src/ui/Avatar';
import { menuList } from '../src/styles/ui/menuList.css';

import { BookMarkFallback } from '../src/ui/bookmarkFallback';
import Bookmark from '/bookmark.svg?react';
import Pen from '/pen.svg?react';
import Border from '/border.svg?react';
import Swal from 'sweetalert2';

export const MyPage = () => {
  const authContext = useAuthContext();
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(
      localStorage.getItem('bookmarks') ?? '[]'
    );
    setBookmarks(storedBookmarks);
  }, []);

  console.log(bookmarks);

  const onClickBookmark = (targetid: string) => {
    Swal.fire({
      title: '제거하시겠습니까?',
      icon: 'warning',
    }).then((res) => {
      if (res.isConfirmed) {
        const updatedBookmarks = bookmarks.filter(({ id }) => id !== targetid);
        setBookmarks(updatedBookmarks);
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      }
    });
  };

  return (
    <div>
      <div className={avatarLayout}>
        <Avatar
          src={`${'https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=Abby'} ?? ${
            authContext?.auth.profile
          }`}
          className={avatar}
        />
        <div>
          <div>
            <span className={text_large}>{authContext?.auth.name}</span>
          </div>
          <p className={userInfoLayout}>{authContext?.auth.email}</p>
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
        <Bookmark />
      </div>
      {bookmarks.length > 0 ? (
        bookmarks.map(({ bookmark, menu, id }) => (
          <div
            key={id}
            onClick={() => onClickBookmark(id)}
            className={menuList}
            style={{
              width: '80%',
              margin: '0 auto',
            }}
          >
            <div>{bookmark}</div>
            <div>{menu}</div>
          </div>
        ))
      ) : (
        <BookMarkFallback />
      )}
    </div>
  );
};
