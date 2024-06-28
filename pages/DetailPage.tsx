import { Input } from '../src/ui/Input';
import { pageLayout } from '../src/styles/ui/pageLayout.css';
import { detailPageLayout, layout, p } from '../src/styles/ui/detail.css';

const list = [
  {
    name: '스타벅스',
    src: '../src/assets/스타벅스.svg',
  },
  {
    name: '투썸플레이스',
    src: '../src/assets/투썸.svg',
  },
  {
    name: '컴포즈',
    src: '../src/assets/컴포즈.svg',
  },
  {
    name: '백다방',
    src: '../src/assets/백다방.svg',
  },
  {
    name: '메가커피',
    src: '../src/assets/메가커피.svg',
  },
  {
    name: '에너지드링크',
    src: '../src/assets/에너지드링크.svg',
  },
];

export const DetailPage = () => {
  return (
    <div className={pageLayout}>
      <Input onEnter={(val) => alert(val)} />

      <div className={detailPageLayout}>
        <div className={layout}>
          {list.map((each) => (
            <div
              key={each.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <img src={each.src} alt={each.name} />
              <div className={p}>{each.name}</div>
            </div>
          ))}
        </div>
        <div className={layout}></div>
        <div className={layout}></div>
      </div>
    </div>
  );
};
