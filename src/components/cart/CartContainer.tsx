import { Background } from "@assets/images";
import { useAppDispatch, useAppSelector } from "@hooks/reduxToolkitHooks";
import { addItem } from "@redux/slices/cartSlice";
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
  const cartItems = useAppSelector((state) => state.carts.cartItems);
  const dispatch = useAppDispatch();

  function handleClick() {
    console.log("cartItem", cartItems);
    dispatch(addItem(1));
  }

  return (
    <div className={styles.cartContainer}>
      <button onClick={handleClick}>click</button>
      {CART_ITEMS.map((item: IItem, index: number) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  );
};

export default CartContainer;
