import styles from "./JeanWomen.module.scss";
import clsx from "clsx";
import { Grid } from "@mui/material";
import { imgJeanProductWomen } from "../../../../assets";
import { Link } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
const JeanWomen: React.FC = () => {
  const data = useAxios("http://localhost:8000/jean-women", "GET");
  return (
    <div className={clsx(styles.wrapperWomen)}>
      <Grid container spacing={2}>
        {data.map((product: any, index: number): any => {
          return (
            <Grid item md={3} key={index}>
              <div className={clsx(styles.product)}>
                <Link
                  to={`/women/jean-product-details/${product.name}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className={clsx(styles.containerImage)}>
                    <img
                      src={imgJeanProductWomen[product.srcImage]}
                      alt={product.srcImage}
                    />
                    <img
                      src={imgJeanProductWomen[product.srcImageHover]}
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
  );
};
export default JeanWomen;
