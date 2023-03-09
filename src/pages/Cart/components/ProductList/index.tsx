import styles from "./ProductList.module.scss";
import clsx from "clsx";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { payBank } from "../../../../assets";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
} from "../../../../features/cart/cartSlice";
import { imgJeanProductMen, imgJeanProductWomen } from "../../../../assets";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
const ProductList: React.FC = () => {
  const productList = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add("signInPage");
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleRemoveProduct = (index: number) => {
    dispatch(removeProduct(index));
  };
  const handleIncreaseQuantity = (index: number) => {
    dispatch(increaseQuantity(index));
  };
  const handleDecreaseQuantity = (index: number) => {
    dispatch(decreaseQuantity(index));
  };
  return (
    <div className={styles.wrapper}>
      <Grid container spacing={2}>
        <Grid item md={7}>
          <ul className={clsx(styles.productList)}>
            {productList.map((product: any, index: number) => {
              return (
                <li key={index} className={clsx(styles.productGroup)}>
                  <div
                    style={{
                      display: "flex",
                      padding: "20px",
                      justifyContent: "space-around",
                    }}
                  >
                    <Link to={`/men/jean-product-details/${product.name}`}>
                      <img
                        src={
                          product.type === "men"
                            ? imgJeanProductMen[product.srcImage]
                            : imgJeanProductWomen[product.srcImage]
                        }
                        alt={product.name}
                        style={{ width: "110px", height: "140px" }}
                      />
                    </Link>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: "20px",
                        width: "308px",
                      }}
                    >
                      <p
                        style={{
                          color: "#2d2d2d",
                          letterSpacing: "0.8px",
                          marginBottom: "10px",
                          fontWeight: "700",
                          fontSize: "18px",
                        }}
                      >
                        {product.cost}
                      </p>
                      <Link
                        to={
                          product.type === "men"
                            ? `/men/jean-product-details/${product.name}`
                            : `/women/jean-product-details/${product.name}`
                        }
                        style={{ textDecoration: "none" }}
                      >
                        <p
                          style={{
                            color: "#2d2d2d",
                            letterSpacing: "0.4px",
                            fontWeight: "400",
                            fontSize: "16px",
                            marginBottom: "8px",
                          }}
                        >
                          {product.name}
                        </p>
                      </Link>
                      <div>
                        <button
                          style={{
                            backgroundColor: "#ccc",
                            padding: "2px 16px",
                            fontSize: "18px",
                            cursor: "pointer",
                            border: "1px solid #ccc",
                          }}
                          onClick={() => handleDecreaseQuantity(index)}
                        >
                          -
                        </button>
                        <span
                          style={{
                            margin: "0 20px",
                            lineHeight: "35px",
                            width: "50px",
                            textAlign: "center",
                          }}
                        >
                          {product.quantity}
                        </span>
                        <button
                          style={{
                            backgroundColor: "#ccc",
                            padding: "2px 16px",
                            fontSize: "18px",
                            cursor: "pointer",
                            border: "1px solid #ccc",
                          }}
                          onClick={() => handleIncreaseQuantity(index)}
                        >
                          +
                        </button>
                      </div>
                      <p style={{ marginTop: "8px", fontWeight: "700" }}>
                        Total:
                        <span
                          style={{
                            marginLeft: "4px",
                            fontWeight: "400",
                            letterSpacing: "0.2px",
                            color: "red",
                          }}
                        >
                          $
                          {(
                            Number(product.cost.slice(1, product.length)) *
                            product.quantity
                          ).toFixed(2)}
                        </span>
                      </p>
                    </div>
                    <CloseIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => handleRemoveProduct(index)}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </Grid>
        <Grid item md={5}>
          <div className={clsx(styles.bagTotal)}>
            <h2
              style={{
                paddingBottom: "24px",
                marginBottom: "14px",
                fontSize: "20px",
                color: "#000",
                fontWeight: "900",
                letterSpacing: "2.4px",
                borderBottom: "1px solid #eee",
              }}
            >
              TOTAL
            </h2>
            <p className={clsx(styles.subTotal)}>
              Sub-total{" "}
              <span>
                $
                {productList.reduce((init: number, product: any) => {
                  return (init += Number(
                    (
                      Number(product.cost.slice(1, product.length)) *
                      product.quantity
                    ).toFixed(2)
                  ));
                }, 0)}
              </span>
            </p>
            <Link to="/login">
              <button className={clsx(styles.signIn)}>CHECKOUT</button>
            </Link>
            <div className={styles.payBank}>
              <p
                style={{
                  fontWeight: " 900",
                  fontSize: "14px",
                  letterSpacing: "1px",
                }}
              >
                WE ACCEPT:
              </p>
              <div style={{ marginTop: "10px" }}>
                <ul style={{ display: "flex", listStyle: "none" }}>
                  {payBank.map((src: any, index: any) => {
                    return (
                      <li
                        key={index}
                        style={{ height: "20px", marginRight: "8px" }}
                      >
                        <img
                          src={src}
                          alt={index}
                          style={{ height: "100%", width: "auto" }}
                        />
                      </li>
                    );
                  })}
                </ul>
                <p
                  style={{
                    fontWeight: " 400",
                    fontSize: "16px",
                    marginTop: "10px",
                  }}
                >
                  Got a discount code? Add it in the next step.
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default ProductList;
