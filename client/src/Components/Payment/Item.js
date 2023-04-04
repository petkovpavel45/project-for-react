/* eslint-disable jsx-a11y/anchor-is-valid */

import { useService } from "../../hooks/useService"
import { cartServiceFactory } from "../../Services/cartService"
import { useCartContext } from "../../contexts/CartContext";
export const Item = ({
    imageUrl,
    title,
    description,
    price,
    _id
}) => {
  const cartService = useService(cartServiceFactory);
  let {deleteItem, setTotal} = useCartContext();
  const onDeleteClick = async () => {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm(`Are you sure you want to delete ${title}`);
    if (result) {
      await cartService.deleteItem(_id);
      deleteItem(_id);
      setTotal(state => state -= price)
    }
  };
    return (
        <div className="item-info">
        <div className="item-img-wrapper">
          <img src={imageUrl} alt="" className="cart-img" />
        </div>
        <div className="item-wrapper">
          <p className="item-name">{title}</p>
          <p className="item-desc">
            {description}
          </p>
          <p className="item-price">${price}</p>
          <div className="trash">
            <i onClick={onDeleteClick} className="fa-solid fa-trash"></i>
          </div>
        </div>
        <hr />
      </div>
    )
}