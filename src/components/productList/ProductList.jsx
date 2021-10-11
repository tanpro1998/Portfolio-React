import "./productList.css";
import ProductCart from "../productCart/ProductCart";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pList">
      <div className="pList-text">
        <h1 className="pList-title">Create & insprire. It's Fl@sh</h1>
        <p className="pList-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed,
          fugiat saepe, deleniti quasi dolores mollitia dolore iste blanditiis
          rerum nam consequatur illum ratione qui nesciunt enim? Incidunt,
          eveniet dolores.
        </p>
      </div>
      <div className="pList-list">
        {products.map((product) => (
          <ProductCart key={product.id} img={product.img} link={product.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
