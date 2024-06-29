import { Input } from '../src/ui/Input';
import { pageLayout } from '../src/styles/ui/pageLayout.css';
import {
  detailPageLayout,
  layout,
  menuItem,
  p,
  칼로리,
} from '../src/styles/ui/detail.css';
import {
  getAllMenu,
  getAllProduct,
  getCaffeine,
  getMenuByQuery,
} from '../src/service/detail';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { MenuListFallback } from '../src/ui/menuListFallback';
import type { product } from '../src/ui/menuListFallback';
import Plus from '../src/assets/plus.svg?react';

import { useAuthContext } from '../src/authContext';
import Swal from 'sweetalert2';
/*
const list = [
  {
    name: '스타벅스',
    src: '../src/assets/스타벅스.svg',
  },
  {
    name: '투썸플레이스',
    src: '../src/assets/투썸플레이스.svg',
  },
  {
    name: '컴포즈',
    src: '../src/assets/컴포즈.svg',
  },
  {
    name: '빽다방',
    src: '../src/assets/뺵다방.svg',
  },
  {
    name: '메가커피',
    src: '../src/assets/메가커피.svg',
  },
  {
    name: '에너지 드링크',
    src: '../src/assets/에너지 드링크.svg',
  },
];
*/

export const DetailPage = () => {
  const authContext = useAuthContext();
  const [brands, setBrands] = useState<string[]>([]);
  const [currentBrand, setCurrentBrand] = useState<string>('');
  const [카페인, set카페인] = useState<number | null>(null);
  const [menus, setMenus] = useState<string[]>([]);
  const [currentMenu, setCurrentMenu] = useState<string>('');
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<null | product[]>(null);
  useEffect(() => {
    getAllProduct().then(({ brands }) => setBrands(brands));
  }, []);

  useEffect(() => {
    getAllMenu({ brand: currentBrand }).then((value) => {
      setMenus(value.menu);
    });
  }, [currentBrand]);

  useEffect(() => {
    getCaffeine({ brand: currentBrand, menu: currentMenu }).then((value) => {
      set카페인(value.caffeine);
    });
  }, [currentMenu]);

  useEffect(() => {
    if (query.length > 0) {
      getMenuByQuery({
        keyword: query,
      }).then(({ products }) => {
        setProducts(products);
      });
    }
  }, [query]);

  const onClickProduct = (brand: string, menu: string, caffeine: number) => {
    setCurrentBrand(brand);
    setCurrentMenu(menu);
    set카페인(caffeine);
    setProducts([]);
    setQuery('');
  };

  const onClickPlus = () => {
    Swal.fire({
      title: '칼로리를 추가하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '네',
      cancelButtonText: '아니오',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '추가되었습니다!',
          text: '성공적으로 기록되었어요!.',
          icon: 'success',
        });
      }
    });
  };

  const onClickItem = () => {
    if (!authContext) {
      return;
    }
    Swal.fire({
      title: '즐겨찾기에 추가하시겠습니까?',
      icon: 'warning',
      cancelButtonText: '아니오',
      confirmButtonText: '네',
    }).then((result) => {
      if (result.isConfirmed) {
        const getBookMarks = JSON.parse(
          localStorage.getItem('bookmarks') ?? '[]'
        );
        if (getBookMarks) {
          getBookMarks.push({
            brand: currentBrand,
            menu: currentMenu,
            id: uuidv4(),
          });
          localStorage.setItem('bookmarks', JSON.stringify(getBookMarks));
        }
      }
    });
  };
  return (
    <div className={pageLayout}>
      <Input onEnter={(val) => setQuery(val)} />
      {products && (
        <MenuListFallback
          products={products ?? []}
          onClickProduct={onClickProduct}
        />
      )}
      <div className={detailPageLayout}>
        <div className={layout}>
          {brands.map((brand) => (
            <div
              key={brand}
              onClick={() => {
                setCurrentBrand(brand);
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <img src={`/${brand}.svg`} alt={brand} />
              <div
                className={p}
                style={{
                  color: (currentBrand ?? 'gray') === brand ? 'black' : 'gray',
                }}
              >
                {brand}
              </div>
            </div>
          ))}
        </div>
        <div className={layout}>
          {menus.map((menu) => (
            <p
              className={menuItem}
              onClick={() => setCurrentMenu(menu)}
              style={{
                color:
                  (currentMenu ?? '#cdb3a1') === menu ? 'black' : '#cdb3a1',
              }}
            >
              {menu}
            </p>
          ))}
        </div>
        <div className={layout}>
          {카페인 && (
            <div
              style={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
              }}
            >
              <p className={칼로리} onClick={onClickItem}>
                {카페인}mg
              </p>
              {authContext?.auth.name && <Plus onClick={() => onClickPlus()} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
