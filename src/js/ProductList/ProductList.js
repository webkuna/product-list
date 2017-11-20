// @flow
import * as React from 'react';
import Card from './Card';
import type {
  Product,
  RemoveProductAction,
  SelectProductAction
} from '../types';

type Props = {
  products: Array<Product>,
  removeProduct: (product: Product) => RemoveProductAction,
  selectProduct: (product: Product) => SelectProductAction
};

const ProductList = (props: Props) => {
  const { selectProduct, removeProduct } = props;
  return (
    <div className="card-list">
      {props.products.map((product, index) => {
        return (
          <Card
            key={index}
            product={product}
            selectProduct={selectProduct}
            removeProduct={removeProduct}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
