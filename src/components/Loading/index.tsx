import clsx from "clsx";
import styles from "./Loading.module.scss";
const Loading: React.FC = () => {
  return <h1 className={clsx(styles.loading)}>...Loading</h1>;
};
export default Loading;
