import styles from "./CartItem.module.scss";

interface ICartItem {
  item: any;
}

const CartItem: React.FC<ICartItem> = ({ item }) => {
  return (
    <div className={styles.cartItem}>
      <img src={item.imgSrc} alt="cartItem" />
      <div>{item.title}</div>
      <div>{item.price}</div>
    </div>
  );
};

export default CartItem;
