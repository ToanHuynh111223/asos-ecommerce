import NoProduct from "./components/NoProduct";
import ProductList from "./components/ProductList";
import GlobalBanner from "../../components/GlobalBanner";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Cart: React.FC = () => {
  const productList = useSelector((state: any) => state.cart);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(productList));
  }, [productList]);

  return (
    <div>
      <GlobalBanner />
      {productList.length !== 0 ? <ProductList /> : <NoProduct />}
    </div>
  );
};
export default Cart;
