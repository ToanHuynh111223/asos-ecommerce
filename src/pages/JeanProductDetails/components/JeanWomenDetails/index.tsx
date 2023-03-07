import styles from "./JeanWomenDetails.module.scss";
import clsx from "clsx";
import { imgJeanProductDetailsWomen } from "../../../../assets";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import useAxios from "../../../../hooks/useAxios";
import { Fragment } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
const JeanWomenDetails: React.FC<{ name: string }> = ({ name }) => {
  const data = useAxios("http://localhost:8000/jean-women", "GET");
  const [quantity, setQuantity] = useState(1);
  const [thumbnails, setThumbnails] = useState("j2-1");
  const [toastMessage, setToastMessage] = useState(false);
  const handleDecreaseQuantity = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else setQuantity(quantity - 1);
  };
  const handleIncreaseQuantity = () => {
    if (quantity === 5) {
      setQuantity(5);
    } else setQuantity(quantity + 1);
  };
  const handleAddToastMessage = () => {
    setToastMessage(true);
  };
  useEffect(() => {
    if (toastMessage) {
      setTimeout(() => {
        setToastMessage(false);
      }, 2500);
    }
  }, [toastMessage]);
  return (
    <>
      <div className={clsx(styles.product)}>
        <Grid container spacing={2}>
          {data
            .filter((product: any) => product.name === name)
            .map((product: any, index) => {
              return (
                <Fragment key={index}>
                  <Grid item md={8}>
                    <div style={{ display: "flex" }}>
                      <ul className={clsx(styles.thumbnails)}>
                        <li>
                          <img
                            src={
                              imgJeanProductDetailsWomen[
                                product.srcImageDetails
                              ]["j2-1"]
                            }
                            alt={product.id}
                            className={
                              thumbnails === "j2-1"
                                ? clsx(styles.imgActive)
                                : ""
                            }
                            onClick={() => setThumbnails("j2-1")}
                          />
                        </li>
                        <li>
                          <img
                            src={
                              imgJeanProductDetailsWomen[
                                product.srcImageDetails
                              ]["j2-2"]
                            }
                            alt={product.id}
                            className={
                              thumbnails === "j2-2"
                                ? clsx(styles.imgActive)
                                : ""
                            }
                            onClick={() => setThumbnails("j2-2")}
                          />
                        </li>
                        <li>
                          <img
                            src={
                              imgJeanProductDetailsWomen[
                                product.srcImageDetails
                              ]["j2-3"]
                            }
                            alt={product.id}
                            className={
                              thumbnails === "j2-3"
                                ? clsx(styles.imgActive)
                                : ""
                            }
                            onClick={() => setThumbnails("j2-3")}
                          />
                        </li>
                        <li>
                          <img
                            src={
                              imgJeanProductDetailsWomen[
                                product.srcImageDetails
                              ]["j2-4"]
                            }
                            alt={product.id}
                            className={
                              thumbnails === "j2-4"
                                ? clsx(styles.imgActive)
                                : ""
                            }
                            onClick={() => setThumbnails("j2-4")}
                          />
                        </li>
                      </ul>
                      <div className={clsx(styles.mainImage)}>
                        <img
                          src={
                            /* 
// @ts-ignore */
                            imgJeanProductDetailsWomen[product.srcImageDetails][
                              thumbnails
                            ]
                          }
                          alt={product.id}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4}>
                    <div>
                      <h1 className={clsx(styles.productName)}>
                        {product.name}
                      </h1>
                      <div className={clsx(styles.productPrice)}>
                        <span
                          style={{
                            fontSize: "18px",
                            fontWeight: "900",
                            letterSpacing: "0.8px",
                            lineHeight: "24px",
                            color: "#d01345",
                          }}
                        >
                          Now {product.costCurrent}
                        </span>
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: "400",
                            letterSpacing: "0.6px",
                            color: "#666",
                            lineHeight: "20px",
                          }}
                        >
                          Was {product.costOld}{" "}
                          <span
                            style={{
                              color: "red",
                            }}
                          >
                            ({product.salePercent})
                          </span>
                        </span>
                      </div>
                      <div className={clsx(styles.deliveryAndReturns)}>
                        <div
                          style={{
                            padding: "16px 16px 0 16px",
                            display: "flex",
                          }}
                        >
                          <LocalShippingIcon />
                          <span
                            style={{
                              lineHeight: "46px",
                              fontSize: "14px",
                              fontWeight: "400",
                              paddingLeft: "12px",
                            }}
                          >
                            Free Delivery.
                          </span>
                        </div>
                        <div
                          style={{
                            padding: "12px 16px 16px",
                            marginLeft: "36px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: "400",
                              letterSpacing: "0.6px",
                              color: "#000",
                            }}
                          >
                            Ts&Cs apply.
                            <Link
                              to="#"
                              style={{
                                color: "#000",
                                paddingLeft: "2px",
                              }}
                            >
                              More delivery info
                            </Link>
                          </span>
                        </div>
                        <div
                          style={{
                            padding: "16px",
                            borderTop: "1px solid #eee",
                            textAlign: "center",
                          }}
                        >
                          <Link
                            to="#"
                            style={{
                              fontSize: "14px",
                              fontWeight: "400",
                              color: "#000",
                            }}
                          >
                            This product has shipping restrictions.
                          </Link>
                        </div>
                      </div>
                      <div className={clsx(styles.quantity)}>
                        <button
                          style={{
                            backgroundColor: "#ccc",
                            padding: "6px 16px",
                            fontSize: "18px",
                            cursor: "pointer",
                            border: "1px solid #ccc",
                          }}
                          onClick={handleDecreaseQuantity}
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
                          {quantity}
                        </span>
                        <button
                          style={{
                            backgroundColor: "#ccc",
                            padding: "6px 16px",
                            fontSize: "18px",
                            cursor: "pointer",
                            border: "1px solid #ccc",
                          }}
                          onClick={handleIncreaseQuantity}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className={clsx(styles.addToBag)}
                        onClick={handleAddToastMessage}
                      >
                        ADD TO BAG
                      </button>
                      <div className={clsx(styles.productDetails)}>
                        <h2
                          style={{
                            margin: "16px 0 0",
                            fontWeight: "700",
                            fontSize: "16px",
                          }}
                        >
                          Product Details
                        </h2>
                        <ul style={{ margin: "16px 0 0px 20px" }}>
                          <li
                            style={{
                              margin: "8px 0 0px 20px",
                              fontWeight: "400",
                            }}
                          >
                            Wear, wash, repeat
                          </li>
                          <li
                            style={{
                              margin: "8px 0 0px 20px",
                              fontWeight: "400",
                            }}
                          >
                            Skinny fit
                          </li>
                          <li
                            style={{
                              margin: "8px 0 0px 20px",
                              fontWeight: "400",
                            }}
                          >
                            Regular rise
                          </li>
                          <li
                            style={{
                              margin: "8px 0 0px 20px",
                              fontWeight: "400",
                            }}
                          >
                            Belt loops
                          </li>
                        </ul>
                      </div>
                      <div className={clsx(styles.productDetails)}>
                        <h2
                          style={{
                            margin: "16px 0 0",
                            fontWeight: "700",
                            fontSize: "16px",
                          }}
                        >
                          Size & Fit
                        </h2>
                        <div
                          style={{
                            lineHeight: "1.4",
                            fontWeight: "400",
                            fontSize: "16px",
                            marginTop: "16px",
                          }}
                        >
                          Model's height: 186cm/6'1"
                          <br />
                          Model is wearing: W 32" L 32"
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Fragment>
              );
            })}
        </Grid>
        <Stack
          sx={{ width: "100%" }}
          spacing={2}
          style={{
            display: toastMessage ? "block" : "none",
            position: "relative",
          }}
        >
          <Alert
            variant="filled"
            severity="success"
            className={clsx(styles.toastMessage)}
          >
            Add to cart successfully — check it out!
          </Alert>
        </Stack>
      </div>
    </>
  );
};
export default JeanWomenDetails;
