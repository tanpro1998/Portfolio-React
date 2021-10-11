import "./productCart.css";

const ProductCart = ({img, link}) => {
  return (
    <div className="pCart">
      <div className="pCart-browser">
        <div className="pCart-circle"></div>
        <div className="pCart-circle"></div>
        <div className="pCart-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="pCart-img" />
      </a>
    </div>
  );
};

export default ProductCart;
