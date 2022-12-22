import styles from "./Cart.module.scss";

import { CartContainer, Checkout } from "@components/layout/cart";

const Cart: React.FC = () => {
  return (
    <div className={styles.container}>
      <h3>3 items in your cart</h3>
      <div className={styles.subContainer}>
        <CartContainer />
        <Checkout />
      </div>
    </div>
  );
};

export default Cart;
