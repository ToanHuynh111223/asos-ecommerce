const NoProduct: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          fontWeight: "900",
          letterSpacing: "0.8px",
          fontSize: "25px",
          marginBottom: "8px",
        }}
      >
        NOTHING MATCHES YOUR SEARCH
      </h1>
      <p style={{ fontWeight: "400", fontSize: "20px" }}>
        But don't give up – check the spelling or try less specific search
        terms.
      </p>
    </div>
  );
};
export default NoProduct;
