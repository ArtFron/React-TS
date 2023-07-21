import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}
export function Product({ product }: ProductProps) {
  const [detailed, setDetailed] = useState(false);
  const btnBgClassName = detailed ? 'bg-gray-400' : 'bg-yellow-400';

  const btnClasses = ['border py-2 px-4', btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      {product.title}
      <img src={product.image} className="w-1/6 border" alt={product.title} />
      <p className="font-bold py-1 px-2">{product.price}$</p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetailed((prev) => !prev)}>
        {detailed ? 'Hide detailed' : 'Show detailed'}
      </button>
      {detailed && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{' '}
            <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}
