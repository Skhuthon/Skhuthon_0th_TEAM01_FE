import { menuList } from '../styles/ui/menuList.css';
export interface products {
  products: product[];
  onClickProduct: (brand: string, menu: string, caffeine: number) => void;
}

export interface product {
  id: number;
  brand: string;
  menu: string;
  caffeine: number;
}
export const MenuListFallback = ({ products, onClickProduct }: products) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div
            className={menuList}
            onClick={() => {
              onClickProduct(product.brand, product.menu, product.caffeine);
            }}
          >
            {product.menu}
          </div>
        </div>
      ))}
    </div>
  );
};
