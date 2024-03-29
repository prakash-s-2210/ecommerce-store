import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, removeSelectedProduct } from '../redux/action/productActions';


export const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const {image, title, price, category, description} = product;
  const dispatch = useDispatch();
  const {productId} = useParams();
  
  useEffect(()=>{
    if(productId && productId !== "") dispatch(fetchProduct(productId));
    return() => {
      dispatch(removeSelectedProduct());
    }
  },[productId])
  return (
    <div className="ui grid container">
    {Object.keys(product).length === 0 ? (
      <div>...Loading</div>
    ) : (
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={image} alt = {title} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="ui teal tag label" >${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}
export default ProductDetail;