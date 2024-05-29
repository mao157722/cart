import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context.jsx";

export default function Product({
  id,
  image,
  title,
  price,
  description
}) {
  const {addItemToCart} = useContext(CartContext);
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>{price} บาท</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => addItemToCart(id)}>เพิ่มลงตะกร้า</button>
        </p>
      </div>
    </article>
  );
}
