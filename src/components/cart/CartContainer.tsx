import { Background } from "@assets/images";
import { useAppDispatch } from "@hooks/reduxToolkitHooks";
import styles from "./CartContainer.module.scss";
import CartItem from "./CartItem";
interface IItem {
  imgSrc: string;
  title: string;
  price: number;
}

const CART_ITEMS: IItem[] = [
  {
    imgSrc: Background,
    title:
      "Túi Xách Nữ Đeo Chéo Đeo Vai Đi Làm Đi Chơi Thời Trang Hàng Hiệu LUMALO STORE TX39",
    price: 1.99,
  },
  {
    imgSrc: Background,
    title:
      "Quan Nữ Đeo Chéo Đeo Vai Đi Làm Đi Chơi Thời Trang Hàng Hiệu LUMALO STORE TX39",
    price: 1.99,
  },
  {
    imgSrc: Background,
    title:
      "Ao Nữ Đeo Chéo Đeo Vai Đi Làm Đi Chơi Thời Trang Hàng Hiệu LUMALO STORE TX39",
    price: 1.99,
  },
];

const CartContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.cartContainer}>
      {CART_ITEMS.map((item: IItem, index: number) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  );
};

export default CartContainer;
