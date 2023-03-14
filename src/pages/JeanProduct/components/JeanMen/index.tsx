import styles from "./JeanMen.module.scss";
import clsx from "clsx";
import { Grid } from "@mui/material";
import { imgJeanProductMen } from "../../../../assets";
import { Link } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import Loading from "../../../../components/Loading";
import { useState, useEffect } from "react";
const JeanMen: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const data = useAxios(
    "https://run.mocky.io/v3/b3e7f95d-c37d-4eb4-8123-5c374071e675",
    "GET"
  );
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return loading ? (
    <div className={clsx(styles.wrapperMen)}>
      <Grid container spacing={2}>
        {data.map((product: any, index: number): any => {
          return (
            <Grid item md={3} key={index}>
              <div className={clsx(styles.product)}>
                <Link
                  to={`/men/jean-product-details/${product.name}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className={clsx(styles.containerImage)}>
                    <img
                      src={imgJeanProductMen[product.srcImage]}
                      alt={product.srcImage}
                    />
                    <img
                      src={imgJeanProductMen[product.srcImageHover]}
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
                    <p className={clsx(styles.productName)}>{product.name}</p>
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
    </div>
  ) : (
    <Loading />
  );
};
export default JeanMen;
