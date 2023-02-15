import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import styles from "./Checkout.module.scss";

const Checkout: React.FC = () => {
  return (
    <div className={styles.checkout}>
      <RadioGroup
        name="payment-method"
        className={styles.paymentMethod}
        // value={value}
        // onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
      <Divider />
      <div className={styles.calculation}>
        <div>
          <span>Item(s) total</span>
          <span>1,550,969₫</span>
        </div>
        <div>
          <span>Discount</span>
          <span>1,550,969₫</span>
        </div>
        <Divider />
        <div>
          <span>Total(3) items</span>
          <span>1,550,969₫</span>
        </div>
      </div>

      <Button>Proceed to checkout </Button>
    </div>
  );
};

export default Checkout;
