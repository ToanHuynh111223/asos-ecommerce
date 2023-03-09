import NoProduct from "./components/NoProduct";
import ProductList from "./components/ProductList";
import GlobalBanner from "../../components/GlobalBanner";
import { useSelector } from "react-redux";
const Cart: React.FC = () => {
  const productList = useSelector((state: any) => state.cart);
  return (
    <div>
      <GlobalBanner />
      {productList.length !== 0 ? <ProductList /> : <NoProduct />}
    </div>
  );
};
export default Cart;
