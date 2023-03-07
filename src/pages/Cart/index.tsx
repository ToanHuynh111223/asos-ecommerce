import styles from "./Cart.module.scss";
import clsx from "clsx";
import GlobalBanner from "../../components/GlobalBanner";
const Cart: React.FC = () => {
  return (
    <div>
      <GlobalBanner />
      <h1>Cart</h1>
    </div>
  );
};
export default Cart;
