import clsx from "clsx";
import styles from "./Search.module.scss";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import GlobalBanner from "../../components/GlobalBanner";
import NoProduct from "./NoProduct";
import { imgJeanProductMen, imgJeanProductWomen } from "../../assets";
import useAxios from "../../hooks/useAxios";
const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  let q = searchParams.get("q") ?? "";
  const dataMen = useAxios(
    "https://run.mocky.io/v3/b3e7f95d-c37d-4eb4-8123-5c374071e675",
    "GET"
  );
  const dataWomen = useAxios(
    "https://run.mocky.io/v3/b04e21b8-cf09-41f9-b767-df7c1e36b129",
    "GET"
  );
  const dataProduct = [...dataMen, ...dataWomen];
  // 👇 remove class to body element
  useEffect(() => {
    document.body.classList.remove("signInPage");
  }, []);
  //scroll page when mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={clsx(styles.wrapper)}>
      <GlobalBanner />
      <div className={clsx(styles.searchBanner)}>
        <p>Your search results for:</p>
        <h1>"{q}"</h1>
      </div>
      <div className={clsx(styles.productList)}>
        {q !== "" &&
        dataProduct.filter((product: any) => {
          return product.name.toUpperCase().search(q.toUpperCase()) >= 0;
        }).length > 0 ? (
          <Grid container spacing={2}>
            {dataProduct
              .filter((product: any) => {
                return product.name.toUpperCase().search(q.toUpperCase()) >= 0;
              })
              .map((product: any, index: number) => {
                return (
                  <Grid item md={3} key={index}>
                    <div className={clsx(styles.product)}>
                      <Link
                        to={
                          product.type === "men"
                            ? `/men/jean-product-details/${product.name}`
                            : `/women/jean-product-details/${product.name}`
                        }
                        style={{ textDecoration: "none" }}
                      >
                        <div className={clsx(styles.containerImage)}>
                          <img
                            src={
                              product.type === "men"
                                ? imgJeanProductMen[product.srcImage]
                                : imgJeanProductWomen[product.srcImage]
                            }
                            alt={product.srcImage}
                          />
                          <img
                            src={
                              product.type === "men"
                                ? imgJeanProductMen[product.srcImageHover]
                                : imgJeanProductWomen[product.srcImageHover]
                            }
                            alt={product.srcImageHover}
                            className={clsx(styles.hoverImg)}
                          />
                          <span className={clsx(styles.sellingFast)}>
                            {product.sellingFast}
                          </span>
                          <span className={clsx(styles.moreColours)}>
                            {product.moreColours}
                          </span>
                          <span className={clsx(styles.salePercent)}>
                            {product.salePercent}
                          </span>
                        </div>
                        <div className={clsx(styles.productDescription)}>
                          <p className={clsx(styles.productName)}>
                            {product.name}
                          </p>
                          <div className={clsx(styles.productCost)}>
                            <span className={clsx(styles.costOld)}>
                              {product.costOld}
                            </span>
                            <span className={clsx(styles.costCurrent)}>
                              {product.costCurrent}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </Grid>
                );
              })}
          </Grid>
        ) : (
          <NoProduct />
        )}
      </div>
    </div>
  );
};
export default Search;
