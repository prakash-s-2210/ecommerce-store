import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { fetchProducts } from '../redux/action/productActions';

const ProductListing = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div className='ui grid container'>
        <ProductComponent />
    </div>
  )
}
export default ProductListing;
