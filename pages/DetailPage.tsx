import { Input } from '../src/ui/Input';
import { pageLayout } from '../src/styles/ui/pageLayout.css';
import { detailPageLayout, layout, p } from '../src/styles/ui/detail.css';
import { getAllProduct } from '../src/service/detail';
import { useEffect, useState } from 'react';

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
  const [brands, setBrands] = useState<string[]>([]);
  useEffect(() => {
    getAllProduct().then(({ brand }) => setBrands(brand));
  }, []);
  return (
    <div className={pageLayout}>
      <Input onEnter={(val) => alert(val)} />

      <div className={detailPageLayout}>
        <div className={layout}>
          {brands.map((brand) => (
            <div
              key={brand}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <div className={p}>{brand}</div>
            </div>
          ))}
        </div>
        <div className={layout}></div>
        <div className={layout}></div>
      </div>
    </div>
  );
};
